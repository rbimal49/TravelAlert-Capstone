import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Button, Col, Row } from "react-bootstrap";

function AlertForm() {
  const navigate = useNavigate();

  // Initialize state for road work data
  const [roadWorkData, setRoadWorkData] = useState({
    roadName: "",
    suburb: "",
    city: "",
    country: "",
    startLocation: "",
    endLoacation: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoadWorkData({
      ...roadWorkData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Convert dates to strings
    roadWorkData.startDate = roadWorkData.startDate.toString("dd-mm-yyyy");
    roadWorkData.endDate = roadWorkData.endDate.toString("dd-mm-yyyy");

    console.log(JSON.stringify(roadWorkData));
    try {
      const response = await fetch(
        "http://localhost:8080/api/roadworks/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(roadWorkData), // Convert formData to JSON
        }
      )
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => {
          console.error(error);
        });

      // Redirect to alerts page
      navigate("/alerts");

      // Optionally, reset form data
      setRoadWorkData({
        roadName: "",
        suburb: "",
        city: "",
        country: "",
        startLocation: "",
        endLoacation: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        description: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center">Road Works Form</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group controlId="formRoadName">
                <Form.Label>Road Information</Form.Label>
                <Form.Control
                  type="text"
                  name="roadName"
                  required
                  placeholder="Road Name"
                  className="mb-2"
                  value={roadWorkData.roadName}
                  onChange={handleInputChange}
                />
                <Form.Control
                  type="text"
                  name="suburb"
                  required
                  placeholder="Suburb Name"
                  className="mb-2"
                  value={roadWorkData.suburb}
                  onChange={handleInputChange}
                />
                <Form.Control
                  type="text"
                  name="city"
                  required
                  placeholder="City Name"
                  className="mb-2"
                  value={roadWorkData.city}
                  onChange={handleInputChange}
                />
                <Form.Control
                  type="text"
                  name="country"
                  required
                  placeholder="Country Name"
                  className="mb-2"
                  value={roadWorkData.country}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="formStartLocation">
                <Form.Label>Location</Form.Label>
                <Row>
                  <Col md={6} className="mb-2">
                    <Form.Control
                      type="text"
                      name="startLocation"
                      required
                      placeholder="Start Location"
                      value={roadWorkData.startLocation}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="endLoacation"
                      required
                      placeholder="End Location"
                      value={roadWorkData.endLoacation}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formDateRange">
                <Form.Label>Date</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="date"
                      name="startDate"
                      required
                      value={roadWorkData.startDate}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="date"
                      name="endDate"
                      required
                      className="mb-2"
                      value={roadWorkData.endDate}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formTimeRange">
                <Form.Label>Time</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="time"
                      name="startTime"
                      required
                      value={roadWorkData.startTime}
                      onChange={handleInputChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="time"
                      name="endTime"
                      required
                      className="mb-2"
                      value={roadWorkData.endTime}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                required
                value={roadWorkData.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-3 w-100">
              Save Data
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default AlertForm;
