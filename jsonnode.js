var fs = require("fs");
var request = require('request');
request('http://pokeapi.co/api/v2/pokemon/1/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Successful!");
    fs.writeFile('myjsonfile.json', body, 'utf8'); 
  }
})
// var http = require('http');
// var options = {
//   	host: 'pokeapi.co',
//   	port : 80,
//   	path: '/api/v2/pokemon',
//   	method: 'GET'
//   };
//  var req = http.get(options, function(data){
// 	// fs.writeFile('myjsonfile.json', response, 'utf8');
// 	fs.writeFile('myjsonfile.json', data, 'utf8');
// 	console.log(data);
//  });

