var http = require('http');
var url = require('url');

var port = process.argv[2];

function formatDate(date){		
	var result = {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};

	return JSON.stringify(result);
}

function formatUnixTime(date){
	var result = {
		unixtime: date.getTime()
	};

	return JSON.stringify(result);
}

var server = http.createServer(function(request, response){
	if (request.method != 'GET')
		return response.end('Send me a GET\n')

	response.writeHead(200, { 'Content-Type': 'application/json' });
	var parsedURL = url.parse(request.url, true);
	var date = new Date(parsedURL.query.iso);

	if (parsedURL.pathname == '/api/parsetime'){
		if (parsedURL.query.iso){
			response.end(formatDate(date));
		}
	}
	else if (parsedURL.pathname == '/api/unixtime'){
		 if (parsedURL.query.iso){
			response.end(formatUnixTime(date));
		}
	}
	else {
		response.end();
	}

	response.end(JSON.stringify(parsedURL));
});

server.on('error', console.error);

server.listen(port);
 
