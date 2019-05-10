const request = require('request');

const geocode = (address, callback) => {
    // encode to handle special characters
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1IjoibWV6emFuaW5lNTEwIiwiYSI6ImNqdmd2YTNndzBidnY0OHF5NHFwb24zZGkifQ.rctCTxcxdW743H-nMlH51Q`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search.', undefined);
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;