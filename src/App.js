import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/header/Header";
import ListOfLocations from "./components/list-of-locations/ListOfLocations";
import LocationInfo from "./components/location-info/LocationInfo";
import Map from "./components/map/Map";

const App = () => {
    return (
        <div className="app">
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <ListOfLocations />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
