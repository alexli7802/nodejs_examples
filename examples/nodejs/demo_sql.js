/*
MySQL set up
 - https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/#apt-repo-fresh-install
 - sudo service mysql status|stop|start
 - (cli) mysql -h localhost -u root -p demo_db   (password: mysqlroot)

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
	var sel = "SELECT * FROM customers where name like ? or address = ?";
	var selAll = "SELECT * FROM customers ORDER BY name DESC LIMIT 5";
	var del = "DELETE FROM customers WHERE address = 'Mountain 21'";
	var upd = "UPDATE customers SET address=? WHERE address=?";
	var dropTbl = "DROP TABLE IF EXISTS customers";
	var crtTbl = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
	var insTbl = "INSERT INTO customers (name, address) VALUES ?";
	// var inser = "INSERT INTO customers (name, address) VALUES ?";
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
	conn.query(insTbl, [records], (err, result, fields)=>{
		if (err) throw err;
		// console.log("table:customers record inserted:" + result.affectedRows);
		// console.log(fields);
		console.log(result);
	})	
});

