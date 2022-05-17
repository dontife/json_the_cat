const request = require('request');
// take input values from the terminal

const fetchBreedDescription = function(breedName, callback) {

  // node request used to get data using hhtp protocol
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response , body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    // case for when the breed requested is not the database
    if (data[0]) {
      let desc = data[0].description;
      callback(null, desc);
    } else {
      callback('no cat found',null);
    }
  });
};

module.exports = {
  fetchBreedDescription
};