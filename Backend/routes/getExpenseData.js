const express = require("express");
const {userAuth} = require('../middleware/authetication');
const userModel = require("../models/user");
const { finance_expense_Model } = require("../models/financeDetails");
const { default: mongoose } = require("mongoose");
const GetExpenseData = express.Router();

GetExpenseData.get("/getExpensedata/:userId",userAuth,async(req,res)=>{
    try{
        const allExpenseData = await finance_expense_Model.find({ userId: new mongoose.Types.ObjectId(req.params.userId) }); //to find the userId
        let getuser = await userModel.findById({_id:req.params.userId});
        
        let email = "";

        if(getuser){
            email = getuser.email;
            console.log(email);
        }
        res.json({data:allExpenseData,userName:email})
    }catch(err){
        res.status(400).json({message:"something went wrong!!"});
    }
})

module.exports = GetExpenseData;
