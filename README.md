# node-weather-app
A weather app built with Node.js, using DarkSky and mapbox APIs.

### Setup
If you don't already have them, create Dark Sky and Mapbox accounts at:

https://darksky.net/dev
https://www.mapbox.com

Once you've obtained your authentication keys, enter the values into the appropriate config fields in `/utils/config.js`.

### Command-line
Enter the address you want as the third argument to retrieve the current weather for that location:

```
node app.js 'San Francisco'
```
