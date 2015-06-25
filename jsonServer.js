var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response){
	if (request.method != 'GET')
		return response.end('Send me a GET\n')

	var parsedURL = url.parse(request.url, true);

	response.end(JSON.stringify(parsedURL));
});

server.on('error', console.error);

server.listen(port, function() {
	console.log("listening...");
});
 