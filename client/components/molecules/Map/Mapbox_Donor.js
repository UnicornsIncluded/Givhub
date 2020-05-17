<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import Geocode from "react-geocode";
import socket from '../../../socket';

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ";

const googleAPIKey = "AIzaSyDC7k8_twTAov9zk3XoHNVM9ztBKTshVhU";

export class MapboxDonor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      pickedUp: false,
    };

    console.log("MAPBOX DONOR PROPS", this.props);
=======
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

    console.log('MAPBOX DONOR PROPS', this.props)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }

  async componentDidMount() {
    try {
      // setting starting markers
<<<<<<< HEAD
      const donorAddress = this.props.user.address;
      Geocode.setApiKey(googleAPIKey);
      Geocode.setLanguage("en");
      let donorResponse = await Geocode.fromAddress(donorAddress);
      let donorResult = donorResponse.results[0].geometry.location;
      const donorLat = donorResult.lat;
      const donorLng = donorResult.lng;
      let courierResponse = await Geocode.fromAddress("Fullstack Academy NY");
      let courierResult = courierResponse.results[0].geometry.location;
      const courierLat = courierResult.lat;
      const courierLng = courierResult.lng;
      let foodBankResponse = await Geocode.fromAddress("Israel Food Bank, 244 5th Ave #244, New York, NY 10001");
      let foodBankResult = foodBankResponse.results[0].geometry.location;
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [donorLng, donorLat],
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [courierLng, courierLat],
            },
          },
        ],
      };
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v10",
        center: [donorLng, donorLat],
        zoom: 11,
      });
      const markerArray = []
      // add markers to map
      geojson.features.forEach(function (marker) {
        // create a HTML element for each feature
        var el = document.createElement("div");
        el.className = "marker";
=======
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
      let foodBankResponse = await Geocode.fromAddress(
        'Israel Food Bank, 244 5th Ave #244, New York, NY 10001'
      )
      let foodBankResult = foodBankResponse.results[0].geometry.location
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
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

        // make a marker for each feature and add to the map
        let newMarker = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
<<<<<<< HEAD
          .addTo(map);

        markerArray.push(newMarker)
      });

      this.setState({ loaded: true });

      socket.on('pickup', (linkedUserId) => {
        this.setState({ pickedUp: true })
=======
          .addTo(map)

        markerArray.push(newMarker)
      })

      this.setState({loaded: true})

      socket.on('pickup', linkedUserId => {
        this.setState({pickedUp: true})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
        markerArray[1].setLngLat([foodBankResult.lng, foodBankResult.lat])
        // markerArray.forEach(marker => {
        //   marker.remove()
        // })
      })
    } catch (error) {
<<<<<<< HEAD
      var msg = null;
      switch (error.code) {
        case error.PERMISSION_DENIED:
          msg = "Please enable geolocation in your browser to use Givhub.";
          break;
        case error.POSITION_UNAVAILABLE:
          msg = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          msg = "Request timed out. Please try again.";
          break;
        case error.UNKNOWN_ERROR:
          msg = "An unknown error occurred.";
          break;
      }
      alert(msg);
=======
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
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    }
  }

  render() {
    return (
      <div>
        {this.state.loaded === false ? (
          <h1>Loading Location Data...</h1>
        ) : (
<<<<<<< HEAD
            <div></div>
          )}
        {this.state.pickedUp ? <div>
          <img src="https://i.ya-webdesign.com/images/delivery-icon-png-13.png" alt="picked-up order" />
        </div> : <div />}
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
=======
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
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}

function mapStateToProps(state) {
  return {
<<<<<<< HEAD
    user: state.user,
  };
}

export default connect(mapStateToProps)(MapboxDonor);
=======
    user: state.user
  }
}

export default connect(mapStateToProps)(MapboxDonor)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
