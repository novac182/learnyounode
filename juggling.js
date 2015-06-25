var http = require('http');
var concatStream = require('concat-stream');

var urls = [process.argv[2], 
			process.argv[3],
			process.argv[4]];

var bodies = ['', '', ''];
var callbackCount = 0;

for (var i = 0; i < 3; i++){
	getUrl(i);
}

function getUrl(index){
	http.get(urls[index], processResponse);

	function processResponse(response){
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.pipe(concatStream(concatStreamComplete))
	}

	function concatStreamComplete(data){
		bodies[index] = data;
		callbackCount++;

		if (callbackCount == 3) {
			bodies.forEach(function(body){
				console.log(body);
			});
		}
	}
}