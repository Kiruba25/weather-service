// weatherService.js
const axios = require('axios');

// Replace 'YOUR_ACCESS_KEY' with your actual weatherstack API access key
const API_KEY = 'YOUR_ACCESS_KEY';
const BASE_URL = 'http://api.weatherstack.com/current';

const fetchWeather = async (location) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                access_key: API_KEY,
                query: location
            }
        });

        if (response.data.success === false) {
            throw new Error(response.data.error.info);
        }

        return response.data;
    } catch (error) {
        throw new Error(`Error fetching weather data: ${error.message}`);
    }
};

module.exports = fetchWeather;
