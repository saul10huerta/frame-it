const mongoose = require('mongoose');
const Item = require('./Item');
const { Schema } = mongoose;

const orderSchema = new Schema({
  seller: {
    type: String,
    required: true,
    trim: true
  },
  buyer: {
    type: String,
    required: true,
    trim: true
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0.99
  },
  items: []
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
