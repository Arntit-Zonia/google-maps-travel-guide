import React from "react";
import Header from "./components/header/Header";
import ListOfLocations from "./components/list-of-locations/ListOfLocations";
import LocationInfo from "./components/location-info/LocationInfo";
import Map from "./components/map/Map";

const App = () => {
    return (
        <div className="app">
            <Header />
            <ListOfLocations />
            <LocationInfo />
            <Map />
        </div>
    );
};

export default App;
