const request = require('request');

const getWeather = (lat, lng, callback) => {
  const site = 'https://api.darksky.net/forecast/';
  const key = '2f50fa7e0f75d86bdf1e165be8b9e0d0/';

  request({
    url: `${site}${key}${lat},${lng}`,
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
}

module.exports.getWeather = getWeather;
