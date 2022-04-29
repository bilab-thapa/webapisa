const mongoose = require("mongoose");


const customer = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname :{
        type : String,
        required: true
    },
    phone:{
        type : String,
        required: true
    },
    email: {
        type : String,
        required: true
       
    },
    age : {
        type : String
    },
    date : {
        type : Date
    },
    gender : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})
module.exports = mongoose.model(" Customer",customer);