const express = require("express");
const { userAuth } = require("../middleware/authetication");
const fillAlldataRoute = express.Router();
const { finance_expense_Model,finance_income_Model } = require("../models/financeDetails.js");
// const { finance_income_model } = require("../models/financeDetails");

fillAlldataRoute.post("/fill-all-data/expense", userAuth, async (req, res) => {
  try {
    const { userId, fixed, variable, financial, occasional } = req.body;
    const expenseData = new finance_expense_Model({
      userId,
      fixed,
      variable,
      financial,
      occasional,
    });
    await expenseData.save();
    res.status(200).json({ message: "data is recieved", data: req.body });
  } catch (err) {
    res.status(401).send(err.message);
  }
});

fillAlldataRoute.post("/fill-all-data/income", userAuth, async(req, res) => {
  try {
    const {
      userId,
      activeIncome,
      passiveIncome,
      portfolio,
      govermentorSocial,
      others,
    } = req.body;
    const incomeData = new finance_income_Model({
      userId,
      activeIncome,
      passiveIncome,
      portfolio,
      govermentorSocial,
      others,
    });
    await incomeData.save();
    console.log(incomeData);
    res.status(200).json({message:"Data is saved",data:req.body});
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = fillAlldataRoute;
