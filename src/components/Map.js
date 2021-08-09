import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@material-ui/core";

import getStyles from "../styles/Map";

const Map = ({ coords, setCoords, setBounds }) => {
    const classes = getStyles();
    const matches = useMediaQuery('(min-width:600px)');

    const handleCoordsOnChange = ({ center: { lat, lng } }) => setCoords({ lat, lng });
    const handleBoundsOnChange = ({ marginBounds: { ne, sw } }) => setBounds({ ne, sw });

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
                center={ coords }
                defaultCenter={ coords }
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
