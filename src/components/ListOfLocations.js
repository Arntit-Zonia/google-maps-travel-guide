import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import LocationInfo from "./LocationInfo";
import getStyles from "../styles/ListOfLocations";

const ListOfLocations = ({ restaurants, childClicked, isLoading }) => {
    const classes = getStyles();
    
    const [elmRefs, setElmRefs] = useState([]);
    const [selectVal, setSelectVal] = useState("restaurants");
    const [ratingVal, setRatingVal] = useState("");

    const handleSelectVal = (e) => setSelectVal(e.target.value);
    const handleRatingVal = (e) => setRatingVal(e.target.value);

    useEffect(() => {
      const refs = Array(restaurants?.length).fill().map((elm, i) => elmRefs[i] || createRef());

      setElmRefs(refs);
    }, [restaurants]);

    const renderRestaurants = () => {
        return restaurants?.map((restaurant, i) => (
            <Grid ref={elmRefs[i]} item key={i} xs={12}>
                <LocationInfo selected={Number(childClicked) === i} refProp={elmRefs[i]} restaurant={restaurant} />
            </Grid>
        ));
    }
  
    return (
      <div className={classes.container}>
        <Typography variant="h4">Food & Dining around you</Typography>
        {isLoading ? (
            <div className={classes.loading}>
                <CircularProgress size="5rem" />
            </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select value={selectVal} onChange={(e) => handleSelectVal(e)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select value={ratingVal} onChange={(e) => handleRatingVal(e)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {renderRestaurants()}
            </Grid>
          </>
        )}
      </div>
    );
};

export default ListOfLocations;
