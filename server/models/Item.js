const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  likes: {
    type: Number,
    min: 0,
    default: 0
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
