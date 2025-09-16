const express = require("express");
const { userAuth } = require("../middleware/authetication");
const { finance_income_Model } = require("../models/financeDetails");
const userModel = require("../models/user");
const GetIncomeData = express.Router();

GetIncomeData.get("/getIncomeData", userAuth, async (req, res) => {
  try {
    const getallIncomes = await finance_income_Model.find({
      userId: req.user.userId,
    });

    let getuser = await userModel.find(req.user.userId);
    let email = "";

    if (getuser) {
      email = getuser?.email;
      console.log(email);
    }
    res.json({ data: getallIncomes, userEmail: email });
  } catch (err) {
    res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = GetIncomeData