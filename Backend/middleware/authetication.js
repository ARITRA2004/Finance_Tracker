const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const userAuth = async (req, res, next) => {
  try {
    console.log(req.cookies);
    const { token } = req.cookies;
    if (!token) throw new Error("Please Login");

    const decodeData = jwt.verify(token, "secretkey");
    const { _id } = decodeData;

    const user = await userModel.findById(_id);
    if (!user) throw new Error("The user does not exist");

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = { userAuth };
