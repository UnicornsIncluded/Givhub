import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

export default function Map() {
    const [viewport, setViewPort] = useState({
        latitude: 40.705,
        longitude: -74.009,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    })

    const _onViewportChange = viewport => setViewPort({ ...viewport })

    return (
        <div>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={"pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ"}
                mapStyle="mapbox://styles/mapbox/streets-v10"
                onViewportChange={_onViewportChange}
            >
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </MapGL>
        </div>
    )
}