var filterPaths = require('./filterPaths.js')

filterPaths(process.argv[2], process.argv[3], filterPathsComplete);

function filterPathsComplete(err, files){
	if (err) return console.error(err);

	files.forEach(function (file){
		console.log(file);
	});

}

