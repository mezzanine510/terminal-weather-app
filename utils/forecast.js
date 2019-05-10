const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/a4caaec19d4c129f3c18a174ceb6dc23/${ latitude },${ longitude }`;

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