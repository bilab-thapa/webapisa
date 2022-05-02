const jwt = require("jsonwebtoken");


module.exports.customerGuard = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token,"bilab");
    console.log(data);
  } catch (e) {}
};
