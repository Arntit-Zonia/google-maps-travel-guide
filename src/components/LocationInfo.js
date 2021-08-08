import React from "react";

const LocationInfo = ({ location, error }) => {
    if (error) {
        return <div className="location-info">{error}</div>;
    }

    return <div className="location-info">{location.name}</div>;
};

export default LocationInfo;
