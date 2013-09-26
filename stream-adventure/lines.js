var split = require('split');
var through = require('through');
var count = 0;

function transform(line) {
	count++;
	if ((count % 2) === 0) {
		return line.toString().toUpperCase();
	} else {
		return line.toString().toLowerCase();
	}
}

process.stdin
	.pipe(split())
	.pipe(through(function (line) {
		this.queue(transform(line) + '\n');
	}))
	.pipe(process.stdout);