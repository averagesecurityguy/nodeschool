var http = require('http');
var parser = require('url');

function processRequest(req, res) {
	var url = parser.parse(req.url, true);
	var iso = url.query['iso'];
	var date = new Date(iso);

	if ((req.method === 'GET') && (url.pathname === '/api/parsetime')) {
		time = {"hour": date.getHours(),
				"minute": date.getMinutes(),
				"second": date.getSeconds()};

		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(time));
	}

	if ((req.method === 'GET') && (url.pathname === '/api/unixtime')) {
		time = {"unixtime": date.getTime()};

		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(time));
	}

	res.writeHead(404);
	res.end('');
}

var server = http.createServer(processRequest);
server.listen(8000);