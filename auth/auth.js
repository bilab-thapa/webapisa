const jwt = require("jsonwebtoken");
const Customer = require("../model/customer_model");
const Staff = require("../model/customer_model");




module.exports.customerGuard = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "bilab");
    console.log(data)
    Customer.findOne({_id:data.customer_id})
    .then((cdata)=>{
      console.log(cdata)
        req.customerInfo = cdata;
        next();
    })
    .catch((e)=>{
        res.json({msg:'Invalid Token'})
    })



  } catch (e) {
      res.json({msg:"Invalid Token"})
  }
};


module.exports.staffGuard = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "bilab");
    Staff.findOne({_id:data.staffId})
    .then((cdata)=>{
        req.staffInfo = cdata;
        next();
    })
    .catch((e)=>{
        res.json({msg:'Invalid Token'})
    })



  } catch (e) {
      res.json({msg:"Invalid Token"})
  }
};
