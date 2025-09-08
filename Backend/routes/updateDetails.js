const express = require('express');
const userModel = require('../models/user');
const UpdateDetails = express.Router();
const bcrypt = require("bcrypt");
const { userAuth } = require('../middleware/authetication');

UpdateDetails.patch("/update-details",userAuth,async(req,res)=>{
    try{
    const {Newfirstname,Newlastname, Newpassword} = req.body;

    let userFields = {};
    let message = []
    
    const prvDetails = await userModel.findById(req.user.userId);

    if(Newfirstname) prvDetails.firstName === Newfirstname ? message.push({firstName:"same as exsiting firstname"}): userFields.firstName = Newfirstname
    if(Newlastname) prvDetails.lastName === Newlastname ? message.push({lastName:"same as exsiting lastname"}): userFields.lastName = Newlastname;
    if(Newpassword) {
        const oldpassword = await bcrypt.compare(Newpassword,prvDetails.password);
        oldpassword === Newpassword ? message.push({password:"same as exsiting password"}) : pass = await bcrypt.hash(Newpassword,10);
    }

    if(Object.keys(userFields).length == 0) res.status(200).json({message:"All fields are same as before"});
    
    const changedDetails = await userModel.findByIdAndUpdate(
        req.user.userId,
        userFields,
        {new:true}
    )
    const fulluserDetails = await userModel.findById({_id:req.user.userId});
    console.log(fulluserDetails);
    res.status(200).json({message:"Updated sucessfully :)"});
    
    await changedDetails.save();
    }catch(err){
        res.status(400).json({message:"Something went wrong!!"});
        // res.send(err.message);
    }
})

module.exports = UpdateDetails;