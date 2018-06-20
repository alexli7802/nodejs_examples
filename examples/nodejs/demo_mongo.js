/*
MongoDB set up
 - (install) https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/
 - (start)   sudo service mongod status|stop|start
 - (shell)   mongo
 (**more commands**): 
	 	https://docs.mongodb.com/master/reference/mongo-shell/


Nodejs set up
	- (YOU NEED A MYSQL DRIVER to access the database!)
	- cd ../examples/nodejs/
	- npm install mongodb
*/

var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var dest_db = "mongodb://localhost:27017";

var docs = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
	];

mongoClient.connect(dest_db, (err, conn)=>{
	if (err) throw err;
	console.log("connected to mongodb: mydb");
	var mydb = conn.db('mydb');

	// ================ create collection ===================
/*	
	mydb.createCollection("customers", (err, result)=>{
		if (err) throw err;
		console.log("create collection: customers");
		conn.close();
	})
*/
	// =============== insert one document ===================
/*	
	var doc = {name:"Company Inc", address: "Highway 37"};
	mydb.collection('customers').insertOne(doc, (err, result)=>{
		if (err) throw err;
		console.log("inserted 1 document");
		conn.close();
	})
*/
	// ============== insert many documents ===================
/*
	mydb.collection('customers').insertMany(docs, (err, result)=>{
		if (err) throw err;
		console.log("Number of documents inserted: " + result.insertedCount);
		conn.close();
	})
*/

	// ============== findOne/find() =====================
/*
	mydb.collection('customers').findOne({}, (err,result)=>{
		if (err) throw err;
		console.log(result);
		conn.close();
	})
*/
	mydb.collection('customers').find({}, { _id: 0, name: 1 }).toArray((err, result)=>{
		if (err) throw err;
		console.log(result);
		conn.close();
	})
})