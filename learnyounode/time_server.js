var net = require('net');

function zeroPad(str) {
	num = Number(str);
	if (num < 10) {
		return '0' + num.toString();
	} else {
		return num.toString();
	}
}

function processRequest(socket) {
	var date = new Date();
	var time = '';

	time += date.getFullYear() + '-';
	time += zeroPad(date.getMonth() + 1) + '-';
	time += zeroPad(date.getDate()) + ' ';
	time += zeroPad(date.getHours()) + ':';
	time += zeroPad(date.getMinutes()) + '\n';

	socket.write(time);
	socket.end();
}


var ts = net.createServer(processRequest);
ts.listen(8000);