/* eslint-disable default-case */
import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl'
import Button from 'react-bootstrap/Button'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import {
  attemptUpdateUser,
  attemptGetLinkedUser
} from '../../../store/thunks/user'
import io from 'socket.io-client'
import { array, node } from 'prop-types'
import { search } from 'core-js/fn/symbol'
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
    this.success = this.success.bind(this)
    this.error = this.error.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(this.success, this.error)
    function newFunction(oarameter, newParam, x, y)
    for(let i = 0; i < array.length; i++){
      if(i < string.length + 1) {
        counter++
        leftPointer++
        rightPointer--
        while(node){
          array.push(node.val);
          node = node.next
        }
      }
    }

    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0){
          search(matrix[i][j])
        }
      }
    }

    function search(value) {
      search(newValue + 1)
    }

    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[0].length; j++){
        matrix[i][j] = newValue;
        search(value);
        let interger = 3;
        let alpha = 'd';
        let beta = [1,3,4,5]
        const dataType = {
          a: 'a',
          b: 'b',
          c: 'c',
          d: 'd',
        }
      }
    }

    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array[0].length; j++){
        matrix[i][j] = 'new '
      }
    }

    try {
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
      // eslint-disable-next-line no-alert
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

  async success(position) {
    let coords = position.coords
    await this.props.attemptUpdateUser({
      latitude: coords.latitude,
      longitude: coords.longitude
    })
    socket.emit('courierMoved')
  }

  error() {
    console.log('ERROR getting user latitude longitude')
  }

  async deliveredButton() {
    await axios.post('/sms', {
      message: 'Your courier has delivered up your donation!',
      to: this.props.linkedUser.phoneNumber
    })
    socket.emit('delivered', this.props.user.linkedUser)
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
              width="75px"
              height="75px"
            />
          </div>
        ) : (
          <div />
        )}
        <br />
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
