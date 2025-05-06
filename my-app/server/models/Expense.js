const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: Date,
  category: String,
});

module.exports = mongoose.model("Expense", expenseSchema);
