var http = require('http');

var req = http.get(url, function(res) {
	var data = '';
	res.setEncoding('utf8');
	res.on('data', function (d) { data += d; });
	res.on('error', function (e) { throw e; });
	res.on('end', function () {
		console.log(data.length);
		console.log(data);
	});
});

req.on('error', function(e) { throw e; });
