// index.js
const express = require('express');
const fetchWeather = require('./weatherService');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/weather', async (req, res) => {
    const location = req.query.city;

    if (!location) {
        return res.status(400).send('Please provide a city or location');
    }

    try {
        const weatherData = await fetchWeather(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Weather service running at http://localhost:${port}`);
});
