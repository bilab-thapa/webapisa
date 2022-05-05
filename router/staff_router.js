const bcryptjs = require('bcryptjs');
const express = require("express");
const staff_model = require("../model/staff_model");
const router = new express.Router();
const Staff = require('../model/staff_model');
const jwt = require('jsonwebtoken');
const auth = require("../auth/auth");



//register for staff
router.post("/staff/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const phone = req.body.phone;
  const email = req.body.email;
  Staff.findOne({ email: email })
    .then((staff_data) => {
      if (staff_data != null) {
        res.json({ msg: "Email already exists" });
        return;
      }
    })
    .catch();

  const password = req.body.password;

  bcryptjs.hash(password, 10, (e, hashed_pw) => {
    const data = new staff_model({
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

//login for staff

router.post("/staff/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Staff.findOne({ email: email }).then((staff_data) => {
    if (staff_data == null) {
      res.json({ msg: "Email or Password Incorrect" });
      return;
    }
    bcryptjs.compare(password, staff_data.password, (r, result) => {
      if (result == true) {
        res.json({ msg: "Invalid Credentials" });
        return;
      }
      //creates token for the logged in user
      const token = jwt.sign({ staff_id: staff_data._id }, "bilab");
      res.json({ token: token });
      //token stores logged in user id
    });
  }).catch;
});

//update the profile
router.post("/staff/uupdate", auth.staffGuard, (req, res) => {});

module.exports = router;
