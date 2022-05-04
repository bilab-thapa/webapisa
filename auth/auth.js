const jwt = require("jsonwebtoken");

module.exports.customerGuard = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "bilab");
    customer.findOne({_id:data.customerId})
    .then((cdata)=>{
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
