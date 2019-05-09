const request = require('request');

const url = 'https://api.darksky.net/forecast/a4caaec19d4c129f3c18a174ceb6dc23/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    }
    else if (response.body.error) {
        console.log(response.body.error);
    }
    else {
        const temperature = response.body.currently.temperature;
        const precipProbability = response.body.currently.precipProbability;
        const todaySummary = response.body.daily.data[0].summary;
        console.log(`${ todaySummary } It is currently ${ temperature } degrees out. There is ${ precipProbability }% chance of rain.`);
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Union%20City,%20California.json?access_token=pk.eyJ1IjoibWV6emFuaW5lNTEwIiwiYSI6ImNqdmd2YTNndzBidnY0OHF5NHFwb24zZGkifQ.rctCTxcxdW743H-nMlH51Q'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log(error);
    }
    else if (response.body.features.length ===0) {
        console.log('Unable to retrieve that location.');
    }
    else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log( `latitude: ${ latitude }`);
        console.log( `longitude: ${ longitude }`);
    }
});