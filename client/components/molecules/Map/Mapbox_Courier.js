import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import mapboxgl from 'mapbox-gl';
import Button from "react-bootstrap/Button";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import { attemptUpdateUser, attemptUpdateUserCourier } from "../../../store/thunks/user";
import io from 'socket.io-client'
const socket = io(window.location.origin);
mapboxgl.accessToken = 'pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ';

export class MapboxCourier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            directions: {},
            newOrigin: ''
        };

        this.getLocation = this.getLocation.bind(this)
        this.pickedUp = this.pickedUp.bind(this)
        console.log("MAPBOXCOURIER PROPS", this.props)
    }

    async componentDidMount() {
        try {
            const pos = await this.getLocation()

            const map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v10',
                center: [-74.009, 40.705],
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
                directions.setOrigin("Fullstack Academy")
                directions.setDestination(donorAddress || "New York University")
            })
            this.setState({ loaded: true, directions: directions, newOrigin: donorAddress || "New York University" })
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

    // componentDidUpdate() {
    //     console.log('UPDATED COURIER', this.props)
    // }

    getLocation() {
        if (navigator.geolocation) {
            return new Promise(
                (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
            )
        } else {
            alert('Geolocation is not supported by this browser.')
        }
    }

    pickedUp() {
        this.state.directions.setOrigin(this.state.newOrigin)
        this.state.directions.setDestination("Israel Food Bank, 244 5th Ave #244, New York, NY 10001")
    }

    deliveredButton() {
        // console.log("delivered props", props)
        // VV maybe empty array?
        socket.emit('delivered', this.props.user.linkedUser)
        // this.props.attemptUpdateUser({linkedUser: null})
        // this.props.history.push("/thankyou")
    }

    render() {
        return (
            <div>
                <Button onClick={this.pickedUp}>Picked-Up</Button>
                <Button onClick={() => this.deliveredButton()}>Delivered</Button>
                {this.state.loaded === false ? <h1>Loading Location Data...</h1> : <div></div>}
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        orderStatus: state.orderStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        attemptUpdateUser: (userDetails) => dispatch(attemptUpdateUser(userDetails))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapboxCourier);
