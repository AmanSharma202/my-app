const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/expenses", expenseRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/expenses", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("DB connection error:", err));
