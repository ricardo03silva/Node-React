// const getTimes = () => {
//     // initialize services
//     const service = new google.maps.DistanceMatrixService();
//     // build request
//     const origin1 = { lat: 55.93, lng: -3.118 };
//     const origin2 = 'Greenwich, England';
//     const destinationA = 'Stockholm, Sweden';
//     const destinationB = { lat: 50.087, lng: 14.421 };
//     const request = {
//         origins: [origin1, origin2],
//         destinations: [destinationA, destinationB],
//         travelMode: google.maps.TravelMode.DRIVING,
//         unitSystem: google.maps.UnitSystem.METRIC,
//         avoidHighways: false,
//         avoidTolls: false,
//     };
//     service.getDistanceMatrix(request).then((response) => {
//         console.log(response);
//     });
// };

// window.getTimes = getTimes;

const API_KEY = 'AIzaSyCBOxpkk75xftbcnTFUoETAaS-bjiXlGKA';
var axios = require('axios');

var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101%2C-73.89188969999998&destinations=40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=${API_KEY}`,
    headers: {},
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
