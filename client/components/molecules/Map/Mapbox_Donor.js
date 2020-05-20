import React from 'react'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl'
import Geocode from 'react-geocode'
import socket from '../../../socket'
import {attemptGetLinkedUser} from '../../../../client/store/thunks/user'

mapboxgl.accessToken =
  'pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ'

const googleAPIKey = 'AIzaSyDC7k8_twTAov9zk3XoHNVM9ztBKTshVhU'

export class MapboxDonor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      pickedUp: false,
      map: {}
    }
  }

  async componentDidMount() {
    try {
      // setting starting markers
      const donorAddress = this.props.user.address
      Geocode.setApiKey(googleAPIKey)
      Geocode.setLanguage('en')
      let donorResponse = await Geocode.fromAddress(donorAddress)
      let donorResult = donorResponse.results[0].geometry.location
      const donorLat = donorResult.lat
      const donorLng = donorResult.lng
      let courierResponse = await Geocode.fromAddress('Fullstack Academy NY')
      let courierResult = courierResponse.results[0].geometry.location
      const courierLat = courierResult.lat
      const courierLng = courierResult.lng
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [donorLng, donorLat]
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [courierLng, courierLat]
            }
          }
        ]
      }
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [donorLng, donorLat],
        zoom: 11
      })
      const markerArray = []
      // add markers to map
      geojson.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement('div')
        el.className = 'marker'

        // make a marker for each feature and add to the map
        let newMarker = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map)

        markerArray.push(newMarker)
      })
      this.props.attemptGetLinkedUser(this.props.user.linkedUser)

      this.setState({loaded: true, map: map})

      socket.on('pickup', linkedUserId => {
        this.setState({pickedUp: true})
        markerArray[1].setLngLat([
          this.props.foodBank.longitude,
          this.props.foodBank.latitude
        ])
      })
    } catch (error) {
      var msg = null
      // eslint-disable-next-line default-case
      switch (error.code) {
        case error.PERMISSION_DENIED:
          msg = 'Please enable geolocation in your browser to use Givhub.'
          break
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

  componentDidUpdate() {
    console.log('this.state', this.state)
    let courierLong = this.props.linkedUser.longitude
    let courierLatit = this.props.linkedUser.latitude
    console.log('BIKE PROPS???', this.props.linkedUser)
    if (this.state.loaded === true && courierLong !== undefined) {
      console.log('BIKE IS LOADING ~~~~~', courierLong, courierLatit)
      const markerFunc = () => {
        var bike = document.createElement('div')
        bike.className = 'bikeMarker'
        let newBike = new mapboxgl.Marker(bike)
          .setLngLat([courierLong, courierLatit])
          .addTo(this.state.map)
      }
      markerFunc()
    }
  }

  render() {
    return (
      <div>
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
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    foodBank: state.foodBank,
    linkedUser: state.linkedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetLinkedUser: linkedUserId =>
      dispatch(attemptGetLinkedUser(linkedUserId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapboxDonor)
