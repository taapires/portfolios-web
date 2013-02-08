var Static = require('node-static');

var file = new(Static.Server)('./static/danielapereira');

require('http').createServer(function (req, res) {
	req.addListener('end', function () {
		file.serve(req, res);
	});
}).listen(3000);

console.log("server started...");