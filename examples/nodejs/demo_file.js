

var fs = require('fs');
var http = require('http');

var testFile = '/home/ali/tmp/fs_test.txt';

// fs.appendFile(file, data[, options], callback)
// - file <string> | <Buffer> | <URL> | <number>
// - data <string> | <Buffer>
function test_appendFile() {
	console.log("======= testing: fs.appendFile(...) ========")
	var info = "ali: " + (new Date());
	fs.appendFile(testFile, "\n" + info, (err) => {
		if (err) throw err
		console.log("Appended!");
	})
}

/*
	fs.open(path,flags[,mode],callback)
	- path  <string> | <Buffer> | <URL>
	- flags <string> | <number>
	- mode  <integer> Default: 0o666
	- callback (err, fd) => {...}
*/
function test_openfile() {
	console.log("======= testing: fs.open(...) ========")
	fs.open(testFile, 'w', (err, fd) => {
		if (err) throw err;
		console.log('Opened!')
	})
}

/*
	fs.writeFile(file,data[,options],callback)
	- file <string> | <Buffer> | <URL> | <integer>
	- data <string> | <Buffer> | <Unit8Array>
	- options <Object> | <string>
		* encoding <string> | <null> Default: 'utf8'
		* mode     <integer>         Default: 0o666
		* flag     <string>          Default: 'w'
	- callback (err) => {...}
*/
function test_writeFile() {
	console.log("======= testing: fs.writeFile(...) ========")
	fs.writeFile(testFile, '\nNow is: ' + (new Date()), (err) => {
		if (err) throw err;
		console.log("Written!")
	})
}

/*
	fs.unlink(path,callback)
	- path <string> | <Buffer> | <URL>
	- callback (err) => {}
*/
function test_unlink() {
	console.log("======= testing: fs.unlink(...) ========")
	fs.unlink(testFile, (err) => {
		if (err) throw err;
		console.log("Deleted!");
	})
}

/*
	fs.rename(oldPath,newPath,callback)
*/
function test_rename() {
	console.log("======= testing: fs.rename(...) ========")
	var f2 = '/home/ali/tmp/old.txt';
	fs.rename(testFile, f2, (err)=>{
		if (err) throw err;
		console.log("Renamed!");
	})
}


function test() {
	test_appendFile();
	test_rename();
}

test();

var page = '/home/ali/github/nodejs_examples/examples/nodejs/demo.html';
function fileServer(req, resp) {
	fs.readFile(page, (err, data) => {
		// err <Error>
		//data <string> | <Buffer>

		resp.writeHead(200, {'Content-Type': 'text/html'});
		//response.write(chunk[, encoding][, callback])
		// -- chunk <string> | <Buffer>
		resp.write(data);                                      
		resp.end();
	});
}

// http.createServer(fileServer).listen(8080);