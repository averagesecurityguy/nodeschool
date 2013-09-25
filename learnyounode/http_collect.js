var http = require('http');

var req = http.get(url, function(res) {
	var data = '';
	res.setEncoding('utf8');
	res.on('data', function (d) { console.log(d); });
	res.on('error', function (e) { throw e; });
});

req.on('error', function(e) { throw e; });
