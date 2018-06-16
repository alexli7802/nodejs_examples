/*
npm install -g formidable
*/

var formidable = require('/usr/local/lib/node_modules/formidable');
var http = require('http');
var fs = require('fs');

http.createServer((req, resp)=>{
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
      var curPath = files.filetoupload.path;
      var newPath = '/Users/alex/tmp/' + files.filetoupload.name;
      fs.rename(curPath, newPath, (err)=>{
        if (err) throw err;
        resp.write('File uploaded and renamed!');
        resp.end();
      })
    });
  } else {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    resp.write('<input type="file" name="filetoupload"><br>');
    resp.write('<input type="submit">');
    resp.write('</form>');
    return resp.end();
  }
}).listen(8080);
