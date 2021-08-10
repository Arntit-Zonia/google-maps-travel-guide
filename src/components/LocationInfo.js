import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import getStyles from "../styles/LocationInfo";

const LocationInfo = ({ restaurant, error }) => {
    const classes = getStyles();

    const visitRestaurantUrl = (url) => window.open(url, "_blank");

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
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(restaurant.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {restaurant.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography gutterBottom variant="subtitle1">{restaurant.ranking}</Typography>
                </Box>
                {restaurant?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {restaurant?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}

                {restaurant?.address && (
                    <Typography className={classes.subtitle} gutterBottom variant="subtitle2" color="textSecondary">
                        <LocationOnIcon /> {restaurant.address}
                    </Typography>
                )}

                {restaurant?.phone && (
                    <Typography className={classes.spacing} gutterBottom variant="subtitle2" color="textSecondary">
                        <PhoneIcon /> {restaurant.phone}
                    </Typography>
                )}
                <Button size="small" color="primary" onClick={() => window.open(restaurant.web_url, "_blank")}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(restaurant.website, "_blank")}>
                    Website
                </Button>
            </CardContent>
        </Card>
    );
};

export default LocationInfo;
