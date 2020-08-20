const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
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
  items: [{Item}]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
