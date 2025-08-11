const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.yelp.com/v3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${API_KEY}`
  }
};

export const getBusinessListings = async (searchTerm, location, sortBy) => {    
    try {                
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${BASE_URL}/businesses/search?location=${location}&term=${searchTerm}&sort_by=${sortBy}&limit=20`, options);

        if(response.ok) {
            const jsonResponse = await response.json();
            console.log("Shits working: ", jsonResponse);
            return jsonResponse;
        }        

        throw new Error('Request failed!');
    } catch (error) {
        console.log("Caught error: ", error);
    }
}