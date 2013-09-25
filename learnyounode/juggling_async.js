var http = require('http');

function getUrl(url, callback) {
	var req = http.get(url, function(res) {
		var data = '';
		res.setEncoding('utf8');
		res.on('data', function (d) { data += d; });
		res.on('error', function (e) { callback(e); });
		res.on('end', function () {	callback(null, data); });
	});

	req.on('error', function(e) { callback(e); });
}


function getUrls(urls, callback) {
	var count = urls.length;
	var results = {};
	urls.forEach(function (url) {
		getUrl(url, function(err, data) {
			if (err) throw err;
			results[url] = data;
			count--;
			if (count <= 0) {callback(results);}
		});
	});
}

getUrls(process.argv.slice(2), function(results) {
	console.log(results[process.argv[2]]);
	console.log(results[process.argv[3]]);
	console.log(results[process.argv[4]]);
});
