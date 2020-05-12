import React, { useState } from "react";
import MapGL from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 40.705,
        longitude: -74.009,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    })

    return (
        <div>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={"pk.eyJ1IjoidGVhZGVuIiwiYSI6ImNrNXdwbGFwYjE1OHYzbW14YTllZmdzb3MifQ.0hqWN7w_oxX7qzJ5w30EfQ"}
                mapStyle="mapbox://styles/mapbox/streets-v10"
            >
            </MapGL>
        </div>
    )
}