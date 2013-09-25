var fs = require('fs');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

function testExt(file) {
	var fext = file.slice(-1 * ext.length);
	if (fext === ext) {
		console.log(file);
	}
}

function listFiles(err, files) {
	if (err) throw err;
	files.forEach(testExt);
}


fs.readdir(dir, listFiles);
