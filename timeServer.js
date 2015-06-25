var net = require('net');

var server = net.createServer(function(socket){
	socket.end(getDate());
});

server.listen(process.argv[2], function() {
	console.log("listening...");
});

function getDate(){
	var result = '';
	var date = new Date();

	result += date.getFullYear();
	result += '-0';
	result += date.getMonth() + 1;
	result += '-';
	result += date.getDate();
	result += ' ';
	result += date.getHours();
	result += ':';
	result += date.getMinutes();

	return result;
}