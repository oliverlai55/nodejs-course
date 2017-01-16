// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js')
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//5d7d7fe29b94abeb084c41a5ac925f43
//https://api.darksky.net/forecast/5d7d7fe29b94abeb084c41a5ac925f43/40.7449081,-73.95692249999999

const request = require('request');

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
