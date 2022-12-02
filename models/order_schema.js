const mongoose = require('mongoose');

//Attributes of the order object
var orderSchema = new mongoose.Schema({
    ord_user_id: { type: String },
    ord_user_email: { type: String },
    ord_user_mobile: { type: String },
    ord_service_type: { type: String },
    ord_address: { type: String },
    ord_time: { type: String },
})

module.exports = orderSchema;

// mongoose.model('orders', orderSchema);