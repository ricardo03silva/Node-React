const { Client } = require('@googlemaps/google-maps-services-js');
const { google } = require('googleapis');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const API_KEY = 'AIzaSyCBOxpkk75xftbcnTFUoETAaS-bjiXlGKA';
const axios = require('axios');

app.get('/api', (req, res) => {
    console.log('/api');
    res.json({ message: 'Hello from server!' });
});

app.get('/busInfo/:orig&:dest', (req, res) => {
    const origins = req.params.orig.replace(',', '%2C');
    const destination = req.params.dest.replace(',', '%2C');
    const config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=Vancouver%20BC%7CSeattle&destinations=San%20Francisco%7CVictoria%20BC&mode=bicycling&language=fr-FR&key=${API_KEY}`, //this example with 2 origins & 2 destinations
        // url: `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination}&origins=${origins}&key=${API_KEY}`,
        headers: {},
    };
    axios(config)
        .then((response) => {
            console.log('/busInfo');
            console.log(response.data);
            res.json(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
