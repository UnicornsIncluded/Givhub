import React from 'react'
import {connect} from 'react-redux'
import mapboxgl from 'mapbox-gl'
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import Geocode from 'react-geocode'
import socket from '../../../socket'

mapboxgl.accessToken =
  'pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ'

const googleAPIKey = 'AIzaSyDC7k8_twTAov9zk3XoHNVM9ztBKTshVhU'

export class MapboxDonor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      pickedUp: false
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

      this.setState({loaded: true})

      socket.on('pickup', linkedUserId => {
        this.setState({pickedUp: true})
        markerArray[1].setLngLat([
          this.props.foodBank.longitude,
          this.props.foodBank.latitude
        ])
        // markerArray.forEach(marker => {
        //   marker.remove()
        // })
      })
    } catch (error) {
      var msg = null
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

  render() {
    return (
      <div>
        {this.state.loaded === false ? (
          <h1>Loading Location Data...</h1>
        ) : (
          <div />
        )}
        {this.state.pickedUp ? (
          <div>
            <img
              src="https://i.ya-webdesign.com/images/delivery-icon-png-13.png"
              alt="picked-up order"
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
    foodBank: state.foodBank
  }
}

export default connect(mapStateToProps)(MapboxDonor)
