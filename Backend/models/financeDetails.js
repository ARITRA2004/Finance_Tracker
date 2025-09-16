const mongoose = require("mongoose");
const userModel = require("./user");

const expense = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  date: {
    day: {
      type: Number,
      default: () => new Date().getDate(),
    },
    month: {
      type: Number,
      default: () => new Date().getMonth() + 1,
    },
    year: {
      type: Number,
      default: () => new Date().getFullYear(),
    },
  },
  fixed: {
    food: { type: Number,default: 0,},
    medical: { type: Number,default: 0,},
    car: { type: Number,default: 0,},
    bills: { type: Number,default: 0,},
    reacharge: { type: Number,default: 0,},
    transport: { type: Number,default: 0,},
    other: { type: Number,default: 0,},
  },
  variable: {},
  financial: {},
  occasional: {},
});

const incomes = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique:true
  },
  date: {
    day: {
      type: Number,
      default: () => new Date().getDate(),
    },
    month: {
      type: Number,
      default: () => new Date().getMonth(),
    },
    year: {
      type: Number,
      default: () => new Date().getFullYear(),
    },
  },
  activeIncome: {
    salary: { type: Number, default: 0 },
    business: { type: Number, default: 0 },
    bonusOrCommission: { type: Number, default: 0 },
    others: { type: Number, default: 0 },
  },
  passiveIncome: {
    rental: { type: Number, default: 0 },
    royalties: { type: Number, default: 0 },
    onlineContent: { type: Number, default: 0 },
    others: { type: Number, default: 0 },
  },
  portfolio: {
    stocks: { type: Number, default: 0 },
    mutualFunds: { type: Number, default: 0 },
    bonds: { type: Number, default: 0 },
    crypto: { type: Number, default: 0 },
    others: { type: Number, default: 0 },
  },
  govermentorSocial: {
    pension: { type: Number, default: 0 },
    subsidies: { type: Number, default: 0 },
    unemployment: { type: Number, default: 0 },
    others: { type: Number, default: 0 },
  },
  others: { type: Number, default: 0 },
});

const finance_expense_Model = mongoose.model("Finance_Expense", expense);
const finance_income_Model = mongoose.model("Finance_income", incomes);

module.exports = { finance_expense_Model, finance_income_Model };
