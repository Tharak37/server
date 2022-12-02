const mongoose = require('mongoose');

//Attributes of the order object
var userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    mobile: { type: String },
    password: { type: String },
    address: { type: String },
    // status: { type: String },
})

module.exports = userSchema;

// mongoose.model('Users', userSchema);