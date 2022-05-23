const mongoose = require("mongoose");

const product = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
  },
  quantity: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model("Product",product);
