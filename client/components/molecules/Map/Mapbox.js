import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ';

export default class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -74.009,
            lat: 40.705,
            zoom: 12
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
        )
    }
}