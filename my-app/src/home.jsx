// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ExpenseForm from "./ExpenseForm";
// import ExpenseList from "./ExpenseList";

// const Home = () => {
//   const [expenses, setExpenses] = useState([]);

//   const fetchExpenses = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/expenses");
//       setExpenses(res.data);
//     } catch (error) {
//       console.error("Error fetching expenses:", error);
//     }
//   };

//   useEffect(() => {
//     fetchExpenses();
//   }, []);

//   const addExpense = async (newExpense) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/expenses/add",
//         newExpense
//       );
//       // Option 1: Re-fetch entire list
//       fetchExpenses();
//       // Option 2: Just append to local state (if you trust API to return new item)
//       // setExpenses([...expenses, res.data]);
//     } catch (error) {
//       console.error("Error adding expense:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Expense Tracker</h1>
//       <ExpenseForm onAddExpense={addExpense} />
//       <ExpenseList expenses={expenses} />
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expensesPerPage] = useState(5); // Number of expenses per page

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
      await axios.post("http://localhost:5000/api/expenses/add", newExpense);
      fetchExpenses();
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const updateExpense = async (id, updatedExpense) => {
    try {
      await axios.put(`http://localhost:5000/api/expenses/${id}`, updatedExpense);
      fetchExpenses();
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  // Pagination logic
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = expenses.slice(indexOfFirstExpense, indexOfLastExpense);
  const totalPages = Math.ceil(expenses.length / expensesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList
        expenses={currentExpenses}
        onDelete={deleteExpense}
        onUpdate={updateExpense}
      />
      
    </div>
  );
};

export default Home;