import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header";
import ListOfLocations from "./components/ListOfLocations";
import Map from "./components/Map";
import { getRestaurantsData } from "./api";

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        console.log(coords, bounds);

        getRestaurantsData()
        .then((data) => {
            // console.log(data);

            setRestaurants(data);
        });
    }, [coords, bounds]);

    return (
        <div className="app">
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <ListOfLocations />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map coords={coords} setCoords={setCoords} setBounds={setBounds} />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
