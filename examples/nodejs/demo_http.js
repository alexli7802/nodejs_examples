
/*
	Demo:
	- browser: http://localhost:8080/?year=2018&month=June&day=14
*/


//load 'http' library
var http = require('http');
//load 'url' library: to parse url
var url = require('url');

function process(req, resp) {
	resp.writeHead(200, {'Content-Type': 'text/html'});    // optional: http header
	var q = url.parse(req.url, true).query;
	resp.write(q.year + " " + q.month);
	resp.end();
}

http.createServer(process).listen(8080);