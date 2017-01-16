const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/5d7d7fe29b94abeb084c41a5ac925f43/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
