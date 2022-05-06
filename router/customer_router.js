const bcryptjs = require("bcryptjs");
const express = require("express");
const customer_model = require("../model/customer_model");
const router = new express.Router();
const Customer = require("../model/customer_model");
const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
const { route } = require("express/lib/application");



    //ANCHOR Inserting Customer data
router.post("/customer/insert", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const email = req.body.email;
  Customer.findOne({ email: email })
    .then((cust_data) => {
      if (cust_data != null) {
        res.json({ msg: "Email already exists" });
        return;
      }
    })
    .catch();

  const password = req.body.password;
  
    //ANCHOR Hashing Password
  bcryptjs.hash(password, 10, (e, hashed_pw) => {
    const data = new customer_model({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,

      password: hashed_pw,
    });
    data
      .save()
      .then(() => res.json({ msg: "Registered" }))
      .catch((e) => res.json(e));
  });
});

    //ANCHOR Customer Login
router.post("/customer/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Customer.findOne({ email: email }).then((cust_data) => {
    if (cust_data == null) {
      res.json({ msg: "Email or Password Incorrect" });
      return;
    }
    bcryptjs.compare(password, cust_data.password, (r, result) => {
      if (result == false) {
        res.json({ msg: "Invalid Credentials" });
        return;
      }
      //creates token for the logged in user
      const token = jwt.sign({ customer_id: cust_data._id }, "bilab");
      res.json({ token: token });
      //token stores logged in user id
    });
  }).catch;
});

    //ANCHOR This is for testing purpose
router.delete("/customer/delete", auth.customerGuard, (req, res) => {
  res.json({ msg: "deleted" });
});

//ANCHOR This is Dashboard Screen

router.get("/customer/dashboard",auth.customerGuard,(req,res)=>{
  // console.log('Printed');
  res.json(req.customerInfo)
})

//ANCHOR This is dashboard update
router.put("/customer/update",auth.customerGuard,(req,res)=>{

})


module.exports = router;
