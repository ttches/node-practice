const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=14842%20North%2045th%20Way%20Phoenix%20Arizona',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
