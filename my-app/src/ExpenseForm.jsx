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

  return (
    <Container className="mb-4">
      <Card className="shadow-sm">
        <Card.Header>
          <h5>Add New Expense</h5>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={3}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
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
                <Form.Group controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
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
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder="Food, Bills, etc."
                    value={formData.category}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="note">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    type="text"
                    name="note"
                    placeholder="Optional notes"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="primary" type="submit">
                Add Expense
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ExpenseForm;