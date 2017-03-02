var fs = require('fs');
var request = require('request');
request('http://pokeapi.co/api/v2/pokemon', function (error, response, data) {
  if (!error && response.statusCode == 200) {
    console.log('Successful!');
    fs.writeFile('myjsonfile.json', data, 'utf8'); 
    console.log('Data pull successful');
  }
});
request('http://pokeapi.co/api/v2/encounter-method/', function(error, response, data){
 if(!error && response.statusCode == 200){
 	console.log('Request2 successful!');
 	fs.appendFile('myjsonfile2.json',data,'utf8');
 	console.log('Data pull 2 successful!');
 }
}); 
