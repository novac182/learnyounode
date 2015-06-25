var http = require('http');
var concatStream = require('concat-stream');

var url = process.argv[2];

http.get(url, processResponse);


function processResponse(response){
	response.setEncoding('utf8');
	response.on('error', console.error);
	response.pipe(concatStream(concatStreamComplete))
}

function concatStreamComplete(data){
	console.log(data.length);
	console.log(data);
}

