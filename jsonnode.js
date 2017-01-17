var fs = require("fs");
var http = require('http');
var options = {
  	host: 'pokeapi.co',
  	port : 80,
  	path: '/api/v2/pokemon',
  	method: 'GET'
  };
 var req = http.get(options, function(data){
	// fs.writeFile('myjsonfile.json', response, 'utf8');
	fs.writeFile('myjsonfile.json', data, 'utf8');
	console.log(data);
 });

