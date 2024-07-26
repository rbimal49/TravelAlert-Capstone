import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";

function Login() {
  const { setCurrentUser } = useUserContext();
  const [users, setUsers] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validateMsg, setValidateMsg] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/")
      .then((result) => {
        setUsers(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const validateLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    let matchedUserName = false;
    for (let u of users) {
      if (email === u.emailId) {
        matchedUserName = true;
        if (password === u.password) {
          console.log(u.emailId);
          setCurrentUser(u);
          console.log(u);
          navigate("/home");
        } else {
          setValidateMsg("Incorrect password, please try again.");
        }
      }
    }
    if (!matchedUserName) {
      setValidateMsg("Incorrect username, please register first.");
    }
  };

  return (
    <Container className="login-container">
      <div className="text-container">
        <h4 className="mt-5">Welcome to TravelAlert App !</h4>
        <Container className="mt-3 mt-md-5">
          <Row className="justify-content-center">
            <Col md={4}>
              <Card
                style={{
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-center">Login</Card.Title>
                  <Form onSubmit={validateLogin}>
                    {validateMsg}
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button type="submit" variant="success">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <p className="mt-3">Don't have an account?</p>
                  <Link
                    to="/register"
                    className="btn btn-light border w-100 rounded-0 text-decoration-none"
                  >
                    Sign Up
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Login;
