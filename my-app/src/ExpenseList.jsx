// import React, { useState } from "react";
// import "./ExpenseList.css";

// const ExpenseList = ({ expenses }) => {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="expense-list">
//       {expenses.map((expense) => (
//         <div
//           key={expense._id}
//           className="expense-item"
//           onClick={() => toggleExpand(expense._id)}
//         >
//           <div className="summary">
//             <strong>{expense.title}</strong> - ₹{expense.amount}
//           </div>
//           {expandedId === expense._id && (
//             <div className="details">
//               <p>Date: {expense.date}</p>
//               <p>Category: {expense.category}</p>
//               <p>Note: {expense.note}</p>
//             </div>
//           )}
//         </div>
//       ))}
      
//     </div>



//   );
// };

// export default ExpenseList;



// import React, { useState } from "react";
// import "./ExpenseList.css";

// const ExpenseList = ({ expenses, onDelete, onUpdate }) => {
//   const [expandedId, setExpandedId] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     title: "",
//     amount: "",
//     date: "",
//     category: "",
//     note: "",
//   });

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   const handleEditClick = (expense) => {
//     setEditingId(expense._id);
//     setEditFormData({
//       title: expense.title,
//       amount: expense.amount,
//       date: expense.date,
//       category: expense.category,
//       note: expense.note,
//     });
//   };

//   const handleEditChange = (e) => {
//     setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(editingId, editFormData);
//     setEditingId(null);
//   };

//   return (
//     <div className="expense-list">
//       {expenses.map((expense) => (
//         <div key={expense._id} className="expense-item">
//           {editingId === expense._id ? (
//             <form onSubmit={handleEditSubmit} className="edit-form">
//               <input
//                 name="title"
//                 value={editFormData.title}
//                 onChange={handleEditChange}
//                 required
//               />
//               <input
//                 name="amount"
//                 type="number"
//                 value={editFormData.amount}
//                 onChange={handleEditChange}
//                 required
//               />
//               <input
//                 name="date"
//                 type="date"
//                 value={editFormData.date}
//                 onChange={handleEditChange}
//                 required
//               />
//               <input
//                 name="category"
//                 value={editFormData.category}
//                 onChange={handleEditChange}
//               />
//               <input
//                 name="note"
//                 value={editFormData.note}
//                 onChange={handleEditChange}
//               />
//               <button type="submit">Save</button>
//               <button type="button" onClick={() => setEditingId(null)}>
//                 Cancel
//               </button>
//             </form>
//           ) : (
//             <>
//               <div
//                 className="summary"
//                 onClick={() => toggleExpand(expense._id)}
//               >
//                 <strong>{expense.title}</strong> - ₹{expense.amount}
//               </div>
//               {expandedId === expense._id && (
//                 <div className="details">
//                   <p>Date: {expense.date}</p>
//                   <p>Category: {expense.category}</p>
//                   <p>Note: {expense.note}</p>
//                   <div className="action-buttons">
//                     <button className="Edit-button" onClick={() => handleEditClick(expense)}>
//                       Edit
//                     </button>
//                     <button className="delete-button" onClick={() => onDelete(expense._id)}>
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExpenseList;


























import React, { useState } from "react";
import "./ExpenseList.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ExpenseList = ({ expenses, onDelete, onUpdate }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    note: "",
  });

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleEditClick = (expense) => {
    setEditingId(expense._id);
    setEditFormData({
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
      category: expense.category,
      note: expense.note,
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onUpdate(editingId, editFormData);
    setEditingId(null);
  };

  const handleDeleteClick = (expenseId) => {
    setExpenseToDelete(expenseId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    onDelete(expenseToDelete);
    setShowDeleteModal(false);
    setExpenseToDelete(null);
  };

  return (
    <div className="expense-list">
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this expense?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {expenses.map((expense) => (
        <div key={expense._id} className="expense-item">
          {editingId === expense._id ? (
            <form onSubmit={handleEditSubmit} className="edit-form">
              <input
                name="title"
                value={editFormData.title}
                onChange={handleEditChange}
                required
              />
              <input
                name="amount"
                type="number"
                value={editFormData.amount}
                onChange={handleEditChange}
                required
              />
              <input
                name="date"
                type="date"
                value={editFormData.date}
                onChange={handleEditChange}
                required
              />
              <input
                name="category"
                value={editFormData.category}
                onChange={handleEditChange}
              />
              <input
                name="note"
                value={editFormData.note}
                onChange={handleEditChange}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingId(null)}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <div
                className="summary"
                onClick={() => toggleExpand(expense._id)}
              >
                <h2>{expense.title}</h2> - ₹{expense.amount}
              </div>
              {expandedId === expense._id && (
                <div className="details">
                  <p>Date: {expense.date}</p>
                  <p>Category: {expense.category}</p>
                  <p>Note: {expense.note}</p>
                  <div className="action-buttons">
                    <button className="edit-button" onClick={() => handleEditClick(expense)}>
                      Edit
                    </button>
                    <button 
                      className="delete-button" 
                      onClick={() => handleDeleteClick(expense._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;





















