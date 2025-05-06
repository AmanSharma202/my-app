import React, { useState } from "react";

const ExpenseList = ({ expenses }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div
          key={expense._id}
          className="expense-item"
          onClick={() => toggleExpand(expense._id)}
        >
          <div className="summary">
            <strong>{expense.title}</strong> - ₹{expense.amount}
          </div>
          {expandedId === expense._id && (
            <div className="details">
              <p>Date: {expense.date}</p>
              <p>Category: {expense.category}</p>
              <p>Note: {expense.note}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
