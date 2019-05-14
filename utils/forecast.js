const request = require('request');

// Dark Sky API token
const token = require('./config');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/${ token.darkskyKey }/${ latitude },${ longitude }`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if (body.error) {
            callback('Unable to find location.', undefined);
        }
        else {
            const temperature = body.currently.temperature;
            const precipProbability = body.currently.precipProbability;
            const todaySummary = body.daily.data[0].summary;

            callback(undefined, `${ todaySummary } It is currently ${ temperature } degrees out. There is ${ precipProbability }% chance of rain.`
            );
        }
    });
}

module.exports = forecast;