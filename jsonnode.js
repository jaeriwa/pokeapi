var fs = require("fs");
var xhr = new XMLHttpRequest();
var getJSON = function httpGet(theUrl, callback) {
xhr.open('get', theUrl, true);
xhr.responseType = 'json';
xhr.onload = function (){
	var status = xhr.status;
	if (status == 200) {
		callback(null, xhr.response);
		} 	else {
		calback(status);
				}
		}
		xhr.send(null);
	}
	getJSON("http://pokeapi.co/api/v2/pokemon",
function(err, data) {
  if (err != null) {
    console.log("Something went wrong: " + err);
  } else {
  	fs.writeFile('myjsonfile.json', data, 'utf8');
  	console.log("saved ok");
    // var parent = document.getElementById('voila');
    // for(i=0; i < data.results.length; i++) {
    // console.log(data.results[i].name);
    // var p = document.createElement("p");
    // p.innerHTML = data.results[i].name;
    // p.className = "pokemon";
    // parent.appendChild(p);
    // }
  }
});