import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


mapboxgl.accessToken = 'pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ';

export class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };

        this.getLocation = this.getLocation.bind(this)
        console.log("MAPBOX PROPS", this.props)
    }

    async componentDidMount() {
        try {
            const pos = await this.getLocation()

            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v10',
                center: [pos.coords.longitude, pos.coords.latitude],
                // center: this.props.user.address,
                zoom: 12
            });

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
            })

            map.addControl(directions, 'top-left')
            map.addControl(geolocate, 'bottom-left')
            const donorAddress = this.props.user.address

            map.on('load', function () {
                // directions.setOrigin([pos.coords.longitude, pos.coords.latitude])
                directions.setOrigin("Fullstack Academy")
                directions.setDestination(donorAddress)
            })
            this.setState({ loaded: true })
        } catch (error) {
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
        }
    }

    getLocation() {
        if (navigator.geolocation) {
            return new Promise(
                (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
            )
        } else {
            alert('Geolocation is not supported by this browser.')
        }
    }

    render() {
        return (
            <div>
                {this.state.loaded === false ? <h1>Loading Location Data...</h1> : <div></div>}
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Mapbox);
