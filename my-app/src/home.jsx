import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (newExpense) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/expenses/add",
        newExpense
      );
      // Option 1: Re-fetch entire list
      fetchExpenses();
      // Option 2: Just append to local state (if you trust API to return new item)
      // setExpenses([...expenses, res.data]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Home;
