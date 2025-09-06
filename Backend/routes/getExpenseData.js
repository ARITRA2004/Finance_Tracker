const express = require("express");
const {userAuth} = require('../middleware/authetication');
const userModel = require("../models/user");
const { finance_expense_Model } = require("../models/financeDetails");
const { default: mongoose } = require("mongoose");
const GetExpenseData = express.Router();

GetExpenseData.get("/getExpensedata",userAuth,async(req,res)=>{
    try{
        const allExpenseData = await finance_expense_Model.find({ userId: req.user.userId}); //to find the userId
        let getuser = await userModel.findById(req.user.userId);
        
        let email = "";

        if(getuser){
            email = getuser?.email;
            console.log(email);
        }
        res.json({data:allExpenseData,userEmail:email})
    }catch(err){
        res.status(400).json({message:"something went wrong!!"});
        // res.send(err.message);
    }
})

module.exports = GetExpenseData;
