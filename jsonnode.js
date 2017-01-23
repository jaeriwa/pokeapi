var fs = require("fs");
var request = require('request');
request('http://pokeapi.co/api/v2/pokemon', function (error, response, data) {
  if (!error && response.statusCode == 200) {
    console.log("Successful!");
    fs.writeFile('myjsonfile.json', data, 'utf8'); 
    console.log("Data pull successful");
    var read = JSON.parse(data);
  }
});
