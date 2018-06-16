var url = require('url');
var fs = require('fs');
var http = require('http');
var adr = 'http://localhost:8080/default.html?year=2017&month=february';
/*
 url.parse(urlString[,parseQueryString[,slashesDenoteHost]])
  - urlString <string>
  - parseQueryString <boolean>   Default: false
  - slashesDenoteHost <boolean>  Default: false
*/
function test_parse() {
  console.log("url.parse() method takes a URL string, parses it, and returns a URL object");
  var q = url.parse(adr, true);

  console.log("host: " + q.host);
  console.log("path: " + q.pathname);
  console.log("search: " + q.search);
  console.log(q.query);

  var qdata = q.query;
  console.log(qdata.month);
}
// test_parse();

function serveFile(req, resp) {
  var q = url.parse(req.url, true);
  var fileName = "/Users/alex/github/nodejs_examples/examples/html/" + q.pathname;
  fs.readFile(fileName, (err, data) => {
    if (err) {
      resp.writeHead(404, {'Content-Type': 'text/html'});
      return resp.end("404 Not Found");
    }

    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write(data);
    return resp.end();
  })
}

http.createServer(serveFile).listen(8080);
