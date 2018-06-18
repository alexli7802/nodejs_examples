/*
MySQL set up
 - https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/#apt-repo-fresh-install

Nodejs set up
	- (YOU NEED A MYSQL DRIVER to access the database!)
	- cd ../examples/nodejs/
	- npm install mysql


*/

var mysql = require('mysql');
var log_in = {
	host: "localhost",
	database: "demo_db",
	user: "root",
	password: "mysqlroot"
}

var conn = mysql.createConnection(log_in);
conn.connect((err)=>{
	if (err) throw err;
	console.log("sql connection is ready!");

	// var qry = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	var inser = "INSERT INTO customers (name, address) VALUES ?";
	var records = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']	
	];	
	conn.query(inser, [records], (err, result)=>{
		if (err) throw err;
		console.log("table:customers record inserted:" + result.affectedRows);
		console.log(result);
	})	
});

