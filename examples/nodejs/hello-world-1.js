
var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("========= read ./keynotes.txt =========");
fs.readFile('examples/nodejs/keynotes.txt', function(err,data) {
  console.log(data);
})


http.createServer(function(req, resp) {
  console.log(req.url);
  var qry = url.parse(req.url, true).query;
  console.log("query string: " + qry);
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.end('Hello World!');
}).listen(8080);
