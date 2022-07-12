const mongoose = require("mongoose");
const { mainModule } = require("process");
const { StringDecoder } = require("string_decoder");

const customer = new mongoose.Schema({
    username:{
        type :String,
        required: true
    },
    age:{
        type : Number,
    },
    password : {
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true
    }
});

module.exports = mongoose.model('Customer',customer);

