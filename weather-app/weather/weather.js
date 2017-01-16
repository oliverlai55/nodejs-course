const request = require('request');

var getWeather = () => {
  request({
    url: 'https://api.darksky.net/forecast/5d7d7fe29b94abeb084c41a5ac925f43/40.7449081,-73.95692249999999',
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body.currently.temperature);
    } else {
      console.log('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
