import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import getStyles from "../styles/LocationInfo";

const LocationInfo = ({ restaurant, error }) => {
    const classes = getStyles();

    if (error) {
        return <div className="location-info">{error}</div>;
    }

    return (
        <Card elevation={6}>
            <CardMedia 
            style={{ height: 350 }} 
            image={ restaurant.photo ? restaurant.photo.images.large.url : "https://www.advancedfactors.co.uk/ekmps/shops/advancedfactors/images/lr090528-t2h17606-bolt-1033586-dv-p.png" }
            title={restaurant.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{restaurant.name}</Typography>
            </CardContent>
        </Card>
    );
};

export default LocationInfo;
