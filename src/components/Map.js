import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from '@material-ui/lab/Rating';

import getStyles from "../styles/Map";
import { Restaurant } from "@material-ui/icons";

const Map = ({ coords, setCoords, setBounds, locationData, setChildClicked }) => {
    const classes = getStyles();
    const desktop = useMediaQuery('(min-width:600px)');

    const handleCoordsOnChange = ({ center: { lat, lng } }) => setCoords({ lat, lng });
    const handleBoundsOnChange = ({ marginBounds: { ne, sw } }) => setBounds({ ne, sw });
    const handleChildClick = (e) => setChildClicked(e);

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
                        handleCoordsOnChange(e);
                        handleBoundsOnChange(e);
                    }
                }
                onChildClick={(e) => handleChildClick(e)}
            >
                {locationData?.map((location, i) => (
                    <div 
                        className={classes.markerContainer} 
                        lat={Number(location.latitude)} 
                        lng={Number(location.longitude)}
                        key={i}
                    >
                        {
                          !desktop ? (
                              <LocationOnOutlinedIcon color="primary" fontSize="large" />
                          ) : (
                              <Paper elevation={3} className={classes.paper}>
                                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                      {location.name}
                                  </Typography>
                                  <img 
                                    className={classes.pointer}
                                    src={ location.photo ? location.photo.images.large.url : "https://www.advancedfactors.co.uk/ekmps/shops/advancedfactors/images/lr090528-t2h17606-bolt-1033586-dv-p.png" } 
                                    alt={Restaurant.name}
                                  />
                                  <Rating size="small" value={Number(location.rating)} readOnly />
                              </Paper>
                          )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
