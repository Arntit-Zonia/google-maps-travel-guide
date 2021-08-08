import React from "react";
import GoogleMapReact from "google-map-react";

import getStyles from "../styling/styles";

const Map = ({ coords, setCoords, setBounds }) => {
    const classes = getStyles();

    const handleCoordsOnChange = ({ center: { lat, lng } }) => setCoords({ lat, lng });
    const handleBoundsOnChange = ({ marginBounds: { ne, sw } }) => setBounds({ ne, sw });

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
                center={ coords }
                defaultZoom={ 14 }
                margin={ [50, 50] }
                onChange = {
                    (e) => {
                        // console.log(e);

                        handleCoordsOnChange(e);
                        handleBoundsOnChange(e);
                    }
                }
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
