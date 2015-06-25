var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response){
	response.writeHead(200, { 'content-type': 'text/plain' })
	
	var data = fs.createReadStream(filePath);
	data.on('error', console.error);
	data.pipe(response);
});

server.listen(port, function() {
	console.log("listening...");
});
