
const mongoose = require('mongoose');

const staff = new mongoose.Schema({

    firstname:{
        type:String,
        required:true,
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
})

module.exports = mongoose.model('Staff', staff)