const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var db, userCollection
const userSchema = require('./models/user_schema')
const users = mongoose.model('Users', userSchema);

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://admin:admin@ahs.tkmkvqk.mongodb.net/ahs';
// Use the connect method to create a connection w/ the database
try {
    //  Block of code to try
    // Use the connect method to create a connection w/ the database
MongoClient.connect((url, {useUnifiedTopology: true}), (err, client) => {
    if (err) {
        throw err;
        return;
    }

    // This objects holds the refrence to the db
    db = client.db('ahs');
    userCollection = db.collection('users');

});

  }
  catch(e) {
    console.log('error', e)
    //  Block of code to handle errors
  }

router.get("/", (req, res) => {
    userCollection.find().toArray((err, list) => {
        if (!err) {
            res.send(list)
            console.log('list', list);
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

// function insertDummy() {
//     // Insert one document
//     userCollection.insertOne({
//         username: 'Mani',
//         email: 'tharak37@gmail.com  ',
//         mobile: '7661829283',
//         password: 'password',
//         address: 'address',
//     }, (err, result) => {
//         if (err) {
//             console.log('e', err);
//             return;
//         }

//         console.log('r', result.result);
//     });
// }

router.post("/", (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
})

function insertRecord(req, res) {
    var user = new users();
    user.username = req.body.username;
    user.email = req.body.email;
    user.mobile = req.body.mobile;
    uesr.password = req.body.password;
    uesr.address = req.body.address;
    userCollection.insertOne({ user }, (err, res) => {
        if (!err)
            res.send(res);
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}


router.get("/:id", (req, res) => {
    // res.send(`<h2>UsersPage</h2>`)
    userCollection.findOne({ username: 'Mani' }, function (err, item) {
        if (!err) {
            res.send(item)
            console.log('list', item);
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
})

module.exports = router;