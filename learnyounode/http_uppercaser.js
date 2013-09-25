var http = require('http');
var map = require('through2-map');

function processRequest(req, res) {
	if (req.method === 'POST') {
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	} else {
		res.end('Send a POST\n');
	}
}

var upper = http.createServer(processRequest);
upper.listen(8000);