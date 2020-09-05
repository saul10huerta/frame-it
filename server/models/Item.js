const { Schema, model} = require('mongoose');

// const { Schema } = mongoose;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
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
  status: {
    type: String,
    required: true,
    trim: true
  }
},
{
  toJSON: {
    getters: true
  }
});

const Item = model('Item', itemSchema);

module.exports = Item;
