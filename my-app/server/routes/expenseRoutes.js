const express = require("express");
const router = express.Router();

const {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} = require("../controllers/controller"); // ✅ Correct path

// Define routes
router.post("/add", addExpense);
router.get("/", getExpenses);
router.delete("/:id", deleteExpense);
router.put("/:id", updateExpense);

module.exports = router;
