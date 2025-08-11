const API_KEY = '7Doo-nqG_nQ9BQ3YGLlljM8jCg5EtFb8_EQX3e7X6rtzjc3_srfT80z-o3J4Wl2IpgA687jmF5L0-rRtSzJ9Ak7s02sSYColD7QRCcbKOQH1bQlPoljmXNe7HgSUaHYx';
const BASE_URL = 'https://api.yelp.com/v3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer 7Doo-nqG_nQ9BQ3YGLlljM8jCg5EtFb8_EQX3e7X6rtzjc3_srfT80z-o3J4Wl2IpgA687jmF5L0-rRtSzJ9Ak7s02sSYColD7QRCcbKOQH1bQlPoljmXNe7HgSUaHYx'
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