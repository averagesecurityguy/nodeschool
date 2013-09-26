function filterFiles(dir, ext, callback) {
	var fs = require('fs');
	ext = '.' + ext;

	fs.readdir(dir, function (err, files) {
		var fileList = [];

		if (err)
			return callback(err);

		files.forEach(function (file) {
			var fext = file.slice(-1 * ext.length);
			if (fext === ext) {
				fileList.push(file);
			}
		});
		callback(null, fileList);
	});
}

module.exports = filterFiles;