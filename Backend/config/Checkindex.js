const mongoose =  require("mongoose");

async function dropUserIdIndexes() {
    try {
      const expenseIndexes = await mongoose.connection.db.collection("finance_expenses").indexes();
      if (expenseIndexes.some(idx => idx.name === "userId_1")) {
        await mongoose.connection.db.collection("finance_expenses").dropIndex("userId_1");
        console.log("Dropped unique index on finance_expenses.userId");
      }
  
      const incomeIndexes = await mongoose.connection.db.collection("finance_incomes").indexes();
      if (incomeIndexes.some(idx => idx.name === "userId_1")) {
        await mongoose.connection.db.collection("finance_incomes").dropIndex("userId_1");
        console.log("Dropped unique index on finance_incomes.userId");
      }
    } catch (err) {
      console.error("Error dropping indexes:", err.message);
    }
  }
  
  // Run this once when the module is loaded
module.exports = {dropUserIdIndexes};