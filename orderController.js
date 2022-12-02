const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;
var db, orderCollection
const orderSchema = require('./models/order_schema');
const orders = mongoose.model('Orders', orderSchema);

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://admin:admin@ahs.tkmkvqk.mongodb.net/ahs';
// Use the connect method to create a connection w/ the database
MongoClient.connect(url, (err, client) => {
    if (err) {
        throw err;
        return;
    }

    // This objects holds the refrence to the db
    db = client.db('ahs');
    orderCollection = db.collection('orders');

});

router.get("/", (req, res) => {
    // insertDummy();
    orderCollection.find().toArray((err, list) => {
        if (!err) {
            res.send(list)
            console.log('list', list);
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

function insertDummy() {
    // Insert one document
    orderCollection.insertOne({
        ord_user_id: '638983f90f2719a2c9f159cc',
        ord_user_email: 'tharak37@gmail.com',
        ord_user_mobile: '7661829283',
        ord_service_type: 'plumber',
        ord_address: 'address',
        ord_time: new Date()
    }, (err, result) => {
        if (err) {
            console.log('e', err);
            return;
        }

        console.log('r', result.result);
    });
}

router.post("/", (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
})

function insertRecord(req, res) {
    var order = new orders();
    order.ord_user_id = req.body.userId;
    order.ord_user_email = req.body.userEmail;
    order.ord_user_mobile = req.body.userMobile;
    order.ord_service_type = req.body.serviceType;
    order.ord_address = req.body.userAddress;
    order.ord_status = req.body.orderStatus;

    orderCollection.insertOne({ order }, (err, res) => {
        if (!err)
            res.send(res);
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}


router.get("/:id", (req, res) => {
    // res.send(`<h2>UsersPage</h2>`)
    orderCollection.findOne({ _id: ObjectId("6389d8ce7ab7bfea733b9d11") }, function (err, item) {
        if (!err) {
            res.send(item)
            console.log('order', item);
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
})

module.exports = router;