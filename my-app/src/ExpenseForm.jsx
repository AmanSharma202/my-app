import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAddExpense(formData); // call parent function
    setFormData({ title: "", amount: "", date: "", category: "", note: "" }); // clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
