import axios from "axios";

export const getLocationsData = async (type, ne, sw) => {
    try {
        const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
        const options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                "x-rapidapi-key": process.env.REACT_APP_TRAVEL_ADVISOR_KEY,
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            },
        };

        const  { data: { data } } = await axios.get(URL, options);

        return data;
    }
    
    catch(err) {
        console.log(err);
    }
}