var http = require('http');
var fs = require('fs');
var file = process.argv[2];

function processRequest(req, res) {
	var fileStream = fs.createReadStream(file);
	fileStream.pipe(res);
}


var fileServer = http.createServer(processRequest);
fileServer.listen(8000);