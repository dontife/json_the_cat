const request = require('request');
// take input values from the terminal
const args = process.argv.slice(2);
// node request used to get data using hhtp protocol  
request (`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response , body) => {
  console.log('error:', error);
  console.log('statusCode: ', response && response.statusCode);
  const data = JSON.parse(body);
// case for when the breed requested is not the database  
  if(data.length === 0) {
    console.log('This breed requested is not found');
  } else {
    console.log(data[0].description);
  }
});