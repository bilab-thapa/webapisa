const mongoose = require("mongoose");


const customer = new mongoose.Schema({
    firstname: {
        type: String,
        required: false
    },
    lastname :{
        type : String,
        required: false
    },
    phone:{
        type : String,
        required: false
    },
    email: {
        type : String,
        required: true
       
    },
  
    password: {
        type: String,
        required: true
    },
    customer_image:{
        type : String,
    }

})
module.exports = mongoose.model(" Customer",customer);