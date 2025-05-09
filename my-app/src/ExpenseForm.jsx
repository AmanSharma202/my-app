// import React, { useState } from "react";
// import "./ExpenseForm.css";

// const ExpenseForm = ({ onAddExpense }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     amount: "",
//     date: "",
//     category: "",
//     note: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await onAddExpense(formData); // call parent function
//     setFormData({ title: "", amount: "", date: "", category: "", note: "" }); // clear form
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="title"
//         placeholder="Title"
//         value={formData.title}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="amount"
//         type="number"
//         placeholder="Amount"
//         value={formData.amount}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="date"
//         type="date"
//         value={formData.date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="category"
//         placeholder="Category"
//         value={formData.category}
//         onChange={handleChange}
//       />
//       <input
//         name="note"
//         placeholder="Note"
//         value={formData.note}
//         onChange={handleChange}
//       />
//       <button type="submit">Add Expense</button>
//     </form>
//   );
// };

// export default ExpenseForm;























// import React, { useState } from "react";
// import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ExpenseForm = ({ onAddExpense }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     amount: "",
//     date: "",
//     category: "",
//     note: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await onAddExpense(formData);
//     setFormData({ title: "", amount: "", date: "", category: "", note: "" });
//   };

//   return (
//     <Container className="mb-4">
//       <Card className="shadow-sm">
//         <Card.Header>
//           <h5>Add New Expense</h5>
//         </Card.Header>
//         <Card.Body>
//           <Form onSubmit={handleSubmit}>
//             <Row>
//               <Col md={3}>
//                 <Form.Group controlId="title">
//                   <Form.Label>Title</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="title"
//                     placeholder="Dinner, Rent, etc."
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={2}>
//                 <Form.Group controlId="amount">
//                   <Form.Label>Amount</Form.Label>
//                   <Form.Control
//                     type="number"
//                     name="amount"
//                     placeholder="0.00"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={2}>
//                 <Form.Group controlId="date">
//                   <Form.Label>Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={2}>
//                 <Form.Group controlId="category">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="category"
//                     placeholder="Food, Bills, etc."
//                     value={formData.category}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group controlId="note">
//                   <Form.Label>Note</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="note"
//                     placeholder="Optional notes"
//                     value={formData.note}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <div className="d-flex justify-content-end mt-3">
//               <Button variant="primary" type="submit">
//                 Add Expense
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default ExpenseForm;






import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    await onAddExpense(formData);
    setFormData({ title: "", amount: "", date: "", category: "", note: "" });
  };

  // Background image style with overlay
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(40, 60, 134, 0.85), rgba(69, 162, 71, 0.85)), 
                      url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    padding: '2rem 0',
    borderRadius: '15px',
    marginBottom: '2rem'
  };

  // Card style with blur effect
  const cardStyle = {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '15px'
  };

  // Form input style
  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: '#fff',
    borderRadius: '8px'
  };

  return (
    <div style={backgroundStyle}>
      <Container>
        <Card className="shadow-lg" style={cardStyle}>
          <Card.Header style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <h5 className="mb-0 text-white">Add New Expense</h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={3}>
                  <Form.Group controlId="title" className="mb-3">
                    <Form.Label className="text-white">Title</Form.Label>
                    <Form.Control
                      style={inputStyle}
                      type="text"
                      name="title"
                      placeholder="Dinner, Rent, etc."
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="amount" className="mb-3">
                    <Form.Label className="text-white">Amount</Form.Label>
                    <Form.Control
                      style={inputStyle}
                      type="number"
                      name="amount"
                      placeholder="0.00"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="date" className="mb-3">
                    <Form.Label className="text-white">Date</Form.Label>
                    <Form.Control
                      style={inputStyle}
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group controlId="category" className="mb-3">
                    <Form.Label className="text-white">Category</Form.Label>
                    <Form.Control
                    className="text-black"
                      style={inputStyle}
                      type="text"
                      name="category"
                      placeholder="Food, Bills, etc."
                      value={formData.category}
                      onChange={handleChange}
                      as="select"
                    >
                      <option value="">Select...</option>
                      <option value="Food">Food</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Housing">Housing</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Utilities">Utilities</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId="note" className="mb-3">
                    <Form.Label className="text-white">Note</Form.Label>
                    <Form.Control
                      style={inputStyle}
                      type="text"
                      name="note"
                      placeholder="Optional notes"
                      value={formData.note}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-end mt-2">
                <Button 
                  variant="primary" 
                  type="submit"
                  style={{
                    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 25px',
                    fontWeight: '500'
                  }}
                >
                  Add Expense
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ExpenseForm;