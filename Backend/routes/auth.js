const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require('../models/user');
const {userAuth} = require('../middleware/authetication')


authRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ firstName, lastName, email, password:hashPassword });
    await user.save();
    res.send("user created sucessfully :)");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

authRouter.post("/login",async(req,res)=>{
  try{
    const {email,password} = req.body;

    const user = await userModel.findOne({email:email});
    console.log(email);
    if(!user) throw new Error("Invalid credentials");

    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid) throw new Error("The password is not valid");

    const token = jwt.sign({_id:user._id},"secretkey");
    if(!token) throw new Error("The token is not valid");

    res.cookie("token",token);
    res.status(200).json({ message: "Login successfully :)", token });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})

authRouter.post("/logout",(req,res)=>{
  res.cookie("token",null,{
    expires:new Date(Date.now())
  })
  res.send("Logout sucessfylly");
})

module.exports = authRouter;