import React from "react";
import GoogleMapReact from "google-map-react";

import getStyles from "../styling/styles";

const Map = () => {
    const classes = getStyles();
    const mapCoords = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_API_KEY,
                }}
                defaultCenter={mapCoords}
                center={mapCoords}
                defaultZoom={14}
                margin={[50, 50]}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
