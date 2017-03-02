	
console.log("Successful!");
init();
function loadJSON(callback){
	var xobj = new XMLHttpRequest;
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'myjsonfile.json', true);
	xobj.onreadystatechange = function(){
        if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    var voila = document.getElementById("voila");
    for (i=0; i<actual_JSON.results.length; i++) {
    var p = document.createElement("P");
    p.className += "pokemon";
    p.innerHTML = actual_JSON.results[i].name;
    voila.appendChild(p);
	console.log(actual_JSON.results[i].name);
    };
 });
}

// function loadJSON(callback) {
// 	var http = new XMLHttpRequest();
// 	http.overrideMimeType("application/json");
// 	httpListenerttp.open ("GET", "myjsonfile.json", true);
// 	http.onreadystatechange = function() {

// 	// .open will NOT return a value but simply returns undefined in async mode so use a callback
//     callback(http.responseText);
//     console.log(responseText)
// 	}
// http.send();
// }
// loadJSON(function(response){

// jsonresponse = JSON.parse(response);
// console.log(read.results[i].name);
// });