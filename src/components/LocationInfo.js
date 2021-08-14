import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import getStyles from "../styles/LocationInfo";

const LocationInfo = ({ location, selected, refProp }) => {
    const classes = getStyles();
    
    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  
    return (
        <Card elevation={6}>
            <CardMedia 
            style={{ height: 350 }} 
            image={ location.photo ? location.photo.images.large.url : "https://www.advancedfactors.co.uk/ekmps/shops/advancedfactors/images/lr090528-t2h17606-bolt-1033586-dv-p.png" }
            title={location.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5">{location.name}</Typography>

                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(location.rating)} readOnly />
                    <Typography gutterBottom variant="subtitle1">out of {location.num_reviews} reviews</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography gutterBottom variant="subtitle1">{location.ranking}</Typography>
                </Box>

                {location?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center" my={1}>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}

                {location?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}

                {location?.address && (
                    <Typography className={classes.subtitle} gutterBottom variant="subtitle2" color="textSecondary">
                        <LocationOnIcon /> {location.address}
                    </Typography>
                )}

                {location?.phone && (
                    <Typography className={classes.spacing} gutterBottom variant="subtitle2" color="textSecondary">
                        <PhoneIcon /> {location.phone}
                    </Typography>
                )}

                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(location.web_url, "_blank")}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(location.website, "_blank")}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default LocationInfo;
