import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! We will contact you soon.');
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <Row>
        {/* Contact Information Column */}
        <Col md={5} className="mb-4">
          <div className="bg-light p-4 rounded shadow">
            <h3 className="mb-4">Our Information</h3>

            <div className="d-flex mb-3">
              <FaMapMarkerAlt className="mt-1 me-3" size={20} />
              <div>
                <h5>Address</h5>
                <p> Mahadev ki Nagari<br />Varansi, pin - 212011</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <FaPhone className="mt-1 me-3" size={20} />
              <div>
                <h5>Phone</h5>
                <p>+91 9076504598</p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <FaEnvelope className="mt-1 me-3" size={20} />
              <div>
                <h5>Email</h5>
                <p>Abhishekyadavcdac@gmail.com</p>
              </div>
            </div>

          </div>
        </Col>

        {/* Contact Form Column */}
        <Col md={7}>
          <div className="bg-light p-4 rounded shadow">
            <h3 className="mb-4">Send Us a Message</h3>
            <Form onSubmit={handleSubmit}>

              <Form.Group controlId="formFirstName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>


    </Container>
  );
};

export default ContactUs;