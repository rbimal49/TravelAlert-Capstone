import React, { useState, useEffect } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { FaExclamationCircle, FaCalendarWeek, FaClock } from "react-icons/fa";
import "./style.css";
import { getAlerts as fetchAlerts } from "./AlertServices";

export default function Alerts() {
  // State to store the alerts data
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Function to fetch alerts data from API
    const fetchData = async () => {
      const alertsData = await fetchAlerts();
      setAlerts(alertsData); // Set the fetched data to state
    };
    fetchData();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div>
      {alerts.map((alert, index) => (
        // Render each alert using SingleAlert component
        <SingleAlert key={index} alert={alert} />
      ))}
    </div>
  );
}

function SingleAlert({ alert }) {
  return (
    <Alert variant="light" className="alert-container">
      <Row className="mb-2">
        <Col xs={12} className="alert-item d-flex align-items-center">
          <FaExclamationCircle className="alert-icon-red me-2" />
          <h6 className="m-0">
            <strong>{`${alert.roadName}, ${alert.city}, ${alert.country}`}</strong>
          </h6>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={12} className="alert-item d-flex align-items-center">
          <FaCalendarWeek className="alert-icon me-2" />
          <p className="alert-text m-0">
            {`${alert.startDate} - ${alert.endDate}`}
          </p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={12} className="alert-item d-flex align-items-center">
          <FaClock className="alert-icon me-2" />
          <p className="alert-text m-0">
            {`${alert.startTime} - ${alert.endTime}`}
          </p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={12} className="alert-item d-flex alert-description">
          <p className="alert-text m-0">
            <strong>Description:</strong>
          </p>
          <p className="alert-text">{alert.description}</p>
        </Col>
      </Row>
    </Alert>
  );
}
