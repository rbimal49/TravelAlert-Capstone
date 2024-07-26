import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

// Signup component for user registration
function Signup() {
  const navigate = useNavigate();
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  // Handle input change and update formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:8080/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      })
        .then((response) => response.json())
        .then((json) => console.log(json))

        .catch((error) => {
          console.error(error);
        });

      // Redirect to login page
      navigate("/login");

      // Optionally, reset form data
      setFormData({
        firstName: "",
        lastName: "",
        emailId: "",
        password: "",
      });

      // Redirect or show a success message (optional)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card
            style={{
              border: "1px solid #ccc",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Card.Body>
              <Card.Title className="text-center">Sign Up</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    autoComplete="off"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    autoComplete="off"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailId"
                    placeholder="Enter Email"
                    autoComplete="off"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="success"
                  className="w-100 rounded-0"
                >
                  Sign Up
                </Button>
              </Form>
              <p className="mt-3">Already have an account?</p>
              <Link
                to="/"
                className="btn btn-light border w-100 rounded-0 text-decoration-none"
              >
                Login
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
