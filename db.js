const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://admin:admin@ahs.tkmkvqk.mongodb.net/ahs';
var db;
// Use the connect method to create a connection w/ the database
MongoClient.connect(url, (err, client) => {
    if (err) {
        throw err;
        return;
    }

    console.log('Database connection successful');

    // This objects holds the refrence to the db
    db = client.db('ahs');
    // console.log(userCollection);

    // client.close();
});

module.exports = db