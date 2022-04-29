const express = require("express");
const customer_model = require("../model/customer_model");
const router = new express.Router();
const Customer = require("../model/customer_model");


router.post("/Customer/insert",(req, res)=>{

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const email= req.body.email;
    Customer.findOne({email:email})
    .then((cust_data)=>{
        if(cust_data!=null){
            res.json({msg : "Email already exists"});
            return;
        };
    })
    .catch()


    const age = req.body.age;
    const date = req.body.date;
    const  gender = req.body.gender;
    const password= req.body.password;

    const data = new customer_model({
        firstname: firstname,
        lastname : lastname,
        email : email,
        phone:phone,
        date :date,
        password: password,
        age: age,
        gender : gender
    })
    data.save();
})
module.exports = router;
