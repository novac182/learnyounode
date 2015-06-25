var net = require('net');

var client = net.connect({port: process.argv[2]}, function(){
	console.log('connected');
	client.write(' ');
});

client.on('data', function(data) {
	console.log(data.toString());
	client.end();
});

client.on('end', function() {
	console.log('end');
});