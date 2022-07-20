const mongoose = require("mongoose");
const { mainModule } = require("process");
const { StringDecoder } = require("string_decoder");

const product = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    price : {
        type : String,
        required: true
    },
    description:{
        type :String,
        required: true
    },
    qty:{
        type : String,
    },
    category:{
        type: String,
    },
    image:{
        type: String,
        required: true
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    }
});

module.exports = mongoose.model('Product',product);