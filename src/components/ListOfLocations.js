import React, { useState } from "react";
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";

import LocationInfo from "./LocationInfo";
import getStyles from "../styling/styles";

const ListOfLocations = () => {
    const classes = getStyles();
    const [selectVal, setSelectVal] = useState("restaurants");
    const [ratingVal, setRatingVal] = useState("");
    const locations = [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
    ];

    const handleSelectVal = (e) => setSelectVal(e.target.value);
    const handleRatingtVal = (e) => setRatingVal(e.target.value);

    const renderLocations = () => {
        if (!locations.length) {
            return <LocationInfo error="No locations available" />;
        }

        return locations.map((location) => (
            <Grid item key={new Date()} xs={12}>
                <LocationInfo location={location} />
            </Grid>
        ));
    };

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>

            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={selectVal} onChange={handleSelectVal}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={ratingVal} onChange={handleRatingtVal}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            {renderLocations()}
        </div>
    );
};

export default ListOfLocations;
