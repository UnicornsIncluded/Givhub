import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl'
import Button from 'react-bootstrap/Button'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import {
  attemptUpdateUser,
  attemptGetLinkedUser
} from '../../../store/thunks/user'
import io from 'socket.io-client'
const socket = io(window.location.origin)
mapboxgl.accessToken =
  'pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ'

export class MapboxCourier extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      directions: {},
      newOrigin: '',
      pickedUp: false
    }

    this.getLocation = this.getLocation.bind(this)
    this.pickedUp = this.pickedUp.bind(this)
    this.onTheWay = this.onTheWay.bind(this)
  }

  async componentDidMount() {
    try {
      const pos = await this.getLocation()
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [-74.009, 40.705],
        zoom: 12
      })

      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })

      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
        controls: {
          inputs: false
        }
      })

      map.addControl(directions, 'top-left')
      map.addControl(geolocate, 'bottom-left')

      this.setState({loaded: true, directions: directions})
    } catch (error) {
      var msg = null
      switch (error.code) {
        case error.POSITION_UNAVAILABLE:
          msg = 'Location information is unavailable.'
          break
        case error.TIMEOUT:
          msg = 'Request timed out. Please try again.'
          break
        case error.UNKNOWN_ERROR:
          msg = 'An unknown error occurred.'
          break
      }
      alert(msg)
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      )
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  async onTheWay() {
    await axios.post('/sms', {
      message: 'Your courier is on the way! ',
      to: this.props.linkedUser.phoneNumber
    })
    this.state.directions.setOrigin('Fullstack Academy')
    this.state.directions.setDestination(this.props.linkedUser.address)
    this.setState({onTheWay: true, newOrigin: this.props.linkedUser.address})
  }

  async pickedUp() {
    await axios.post('/sms', {
      message: 'Your courier has picked up your donation! ',
      to: this.props.linkedUser.phoneNumber
    })
    this.state.directions.setOrigin(this.state.newOrigin)
    this.state.directions.setDestination(this.props.foodBank.address)
    this.setState({pickedUp: true})
    socket.emit('pickup', this.props.user.linkedUser)
  }

  async deliveredButton() {
    await axios.post('/sms', {
      message: 'Your courier has delievered up your donation!',
      to: this.props.linkedUser.phoneNumber
    })
    // VV maybe empty array?
    socket.emit('delivered', this.props.user.linkedUser)
    // await this.props.attemptUpdateUser({ linkedUser: null })
    this.props.history.push('/thankyou')
  }

  render() {
    return (
      <div>
        <Button onClick={this.onTheWay}>On The Way</Button>
        <Button onClick={this.pickedUp}>Picked-Up</Button>
        <Button onClick={() => this.deliveredButton()}>Delivered</Button>

        {this.state.pickedUp ? (
          <div>
            <img
              src="https://i.ya-webdesign.com/images/delivery-icon-png-13.png"
              alt="picked-up order"
              width="100px"
              height="100px"
            />
          </div>
        ) : (
          <div />
        )}

        {this.state.loaded === false ? (
          <div>
            <img
              src="https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif"
              alt="loading..."
            />
            <h3>Loading location data...</h3>
          </div>
        ) : (
          <div />
        )}
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    orderStatus: state.orderStatus,
    linkedUser: state.linkedUser,
    foodBank: state.foodBank
  }
}

function mapDispatchToProps(dispatch) {
  return {
    attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails)),
    attemptGetLinkedUser: linkedUserId =>
      dispatch(attemptGetLinkedUser(linkedUserId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapboxCourier)
