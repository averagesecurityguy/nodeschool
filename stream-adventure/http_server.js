var http = require('http');
var through = require('through');

var tr = through(writeUpper);

function writeUpper(text) {
	this.queue(text.toString().toUpperCase());
}

function processRequest(req, res) {
	if (req.method === 'POST') {
		req.pipe(tr).pipe(res);
	} else {
		res.end('Send a POST\n');
	}
}

var upper = http.createServer(processRequest);
upper.listen(8000);