import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header";
import ListOfLocations from "./components/ListOfLocations";
import Map from "./components/Map";
import { getRestaurantsData } from "./api";

const App = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        console.log(coords, bounds);

        getRestaurantsData(bounds.ne, bounds.sw)
        .then((data) => {
            console.log(data);

            setRestaurants(data);

            setIsLoading(false);
        });
    }, [bounds]);

    return (
        <div className="app">
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <ListOfLocations restaurants={restaurants} childClicked={childClicked} isLoading={isLoading} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords} 
                        setBounds={setBounds}
                        restaurants={restaurants}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
