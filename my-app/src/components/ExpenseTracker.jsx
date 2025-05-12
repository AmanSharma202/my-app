// import React, { useState } from "react";
// import { Button, Container, Row, Col, Card } from "react-bootstrap";
// import "./ExpenseTracker.css";

// const ExpenseTracker = () => {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   // Sample data for demonstration
//   const recentExpenses = [
//     { id: 1, title: "Groceries", amount: 125.75, date: "2023-05-15", category: "Food" },
//     { id: 2, title: "Electric Bill", amount: 85.20, date: "2023-05-10", category: "Utilities" },
//     { id: 3, title: "Movie Tickets", amount: 32.50, date: "2023-05-05", category: "Entertainment" },
//   ];

//   const stats = {
//     totalSpent: 1256.80,
//     monthlyBudget: 2000.00,
//     topCategory: "Food",
//   };

//   return (
//     <div className="expense-tracker-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">💰 Expense Tracker</div>
//         <nav>
//           <button 
//             className={`nav-btn ${activeTab === "dashboard" ? "active" : ""}`}
//             onClick={() => setActiveTab("dashboard")}
//           >
//             <i className="fas fa-tachometer-alt"></i> Dashboard
//           </button>
//           <button 
//             className={`nav-btn ${activeTab === "expenses" ? "active" : ""}`}
//             onClick={() => setActiveTab("expenses")}
//           >
//             <i className="fas fa-receipt"></i> Expenses
//           </button>
//           <button 
//             className={`nav-btn ${activeTab === "reports" ? "active" : ""}`}
//             onClick={() => setActiveTab("reports")}
//           >
//             <i className="fas fa-chart-pie"></i> Reports
//           </button>
//           <button 
//             className={`nav-btn ${activeTab === "budgets" ? "active" : ""}`}
//             onClick={() => setActiveTab("budgets")}
//           >
//             <i className="fas fa-wallet"></i> Budgets
//           </button>
//         </nav>
//         <div className="user-profile">
//           <div className="avatar">JS</div>
//           <div className="user-info">
//             <div className="name">John Smith</div>
//             <div className="email">john@example.com</div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <header className="header">
//           <h1>Dashboard</h1>
//           <div className="header-actions">
//             <Button variant="primary" className="add-expense-btn">
//               <i className="fas fa-plus"></i> Add Expense
//             </Button>
//             <div className="notification-bell">
//               <i className="fas fa-bell"></i>
//               <span className="badge">3</span>
//             </div>
//           </div>
//         </header>

//         {/* Stats Cards */}
//         <div className="stats-container">
//           <Card className="stat-card total-spent">
//             <Card.Body>
//               <div className="stat-icon">
//                 <i className="fas fa-money-bill-wave"></i>
//               </div>
//               <div className="stat-info">
//                 <h3>Total Spent</h3>
//                 <h2>${stats.totalSpent.toFixed(2)}</h2>
//                 <p>This month</p>
//               </div>
//             </Card.Body>
//           </Card>

//           <Card className="stat-card budget-left">
//             <Card.Body>
//               <div className="stat-icon">
//                 <i className="fas fa-piggy-bank"></i>
//               </div>
//               <div className="stat-info">
//                 <h3>Budget Left</h3>
//                 <h2>${(stats.monthlyBudget - stats.totalSpent).toFixed(2)}</h2>
//                 <p>of ${stats.monthlyBudget.toFixed(2)}</p>
//               </div>
//             </Card.Body>
//           </Card>

//           <Card className="stat-card top-category">
//             <Card.Body>
//               <div className="stat-icon">
//                 <i className="fas fa-tags"></i>
//               </div>
//               <div className="stat-info">
//                 <h3>Top Category</h3>
//                 <h2>{stats.topCategory}</h2>
//                 <p>Most spending</p>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>

//         {/* Recent Expenses and Chart */}
//         <Row className="content-row">
//           <Col md={8} className="chart-col">
//             <Card className="chart-card">
//               <Card.Header>
//                 <h3>Spending Overview</h3>
//                 <div className="time-filter">
//                   <Button variant="outline-secondary" size="sm">Week</Button>
//                   <Button variant="outline-secondary" size="sm" active>Month</Button>
//                   <Button variant="outline-secondary" size="sm">Year</Button>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <div className="chart-placeholder">
//                   <i className="fas fa-chart-line"></i>
//                   <p>Your spending chart will appear here</p>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4} className="recent-expenses-col">
//             <Card className="recent-expenses">
//               <Card.Header>
//                 <h3>Recent Expenses</h3>
//                 <Button variant="link" size="sm">View All</Button>
//               </Card.Header>
//               <Card.Body>
//                 {recentExpenses.map(expense => (
//                   <div key={expense.id} className="expense-item">
//                     <div className="expense-icon">
//                       <i className="fas fa-shopping-bag"></i>
//                     </div>
//                     <div className="expense-details">
//                       <div className="expense-title">{expense.title}</div>
//                       <div className="expense-category">{expense.category}</div>
//                     </div>
//                     <div className="expense-amount">${expense.amount.toFixed(2)}</div>
//                   </div>
//                 ))}
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default ExpenseTracker;