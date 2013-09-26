var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
var th = through(writeUpper);

function writeUpper(text) {
	this.queue(text.toString().toUpperCase());
}

var stream = tr.select('.loud').createStream();
stream.pipe(th).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);