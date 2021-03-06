import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header";
import ListOfLocations from "./components/ListOfLocations";
import Map from "./components/Map";
import { getLocationsData } from "./api";

const App = () => {
    const [locationData, setLocationData] = useState([]);
    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectVal, setSelectVal] = useState("restaurants");
    const [ratingVal, setRatingVal] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filteredData = locationData.filter((location) => location.rating > ratingVal);

        setFilteredData(filteredData);
    }, [ratingVal]);

    useEffect(() => {
        if (bounds.ne && bounds.sw) {
            setIsLoading(true);

            getLocationsData(selectVal, bounds.ne, bounds.sw)
                .then((data) => {
                    setLocationData(data?.filter((location) => location.name && location.num_reviews > 0));
                    setFilteredData([]);

                    setIsLoading(false);
                });
        }
    }, [selectVal, bounds]);

    return (
        <div className="app">
            <CssBaseline />
            <Header setCoords={setCoords} />
            
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <ListOfLocations 
                        locationData={filteredData.length ? filteredData : locationData } 
                        childClicked={childClicked}
                        isLoading={isLoading} 
                        selectVal={selectVal}
                        setSelectVal={setSelectVal}
                        ratingVal={ratingVal}
                        setRatingVal={setRatingVal}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Map 
                        coords={coords}
                        setCoords={setCoords} 
                        setBounds={setBounds}
                        locationData={filteredData.length ? filteredData : locationData }
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
