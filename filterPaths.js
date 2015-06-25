
var fs = require('fs');
var path = require('path');

module.exports = function (filePath, fileFilter, callback) {
	
	fs.readdir(filePath, readdirComplete);
	
	function readdirComplete(err, files) {
		if (err) return callback(err, null);

		var result = files.filter(function(file){
			return path.extname(file) === '.' + fileFilter;
		});

		console.log('x');
		console.log(fils)

		callback(null, result);
	}
}
