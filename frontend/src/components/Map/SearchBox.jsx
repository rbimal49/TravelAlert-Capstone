// SearchBox.jsx
import React, { useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Autocomplete } from "@react-google-maps/api";

const SearchBox = ({
  onShowRoute,
  onClearRoute,
  onPanToCenter,
  distance,
  duration,
}) => {
  // Refs to hold references to the input fields for origin and destination
  const originRef = useRef();
  const destinationRef = useRef();

  return (
    <Container className="searchbox-container">
      <Row className="align-items-center">
        <Col xs="auto" className="d-flex autocomplete-container">
          <Autocomplete className="first-input">
            <Form.Control
              type="text"
              placeholder="Origin"
              ref={originRef}
              className="autocomplete-input auto-first-input"
              autoComplete="on"
            />
          </Autocomplete>
          <Button className="geo-btn" onClick={onPanToCenter}>
            <i className="bi bi-geo-alt-fill"></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="autocomplete-container">
          <Autocomplete className="first-input">
            <Form.Control
              type="text"
              placeholder="Destination"
              className="autocomplete-input"
              ref={destinationRef}
              autoComplete="on"
            />
          </Autocomplete>
        </Col>
      </Row>
      <Row className="buttons-container">
        <Button
          className="route-btn button"
          onClick={() => onShowRoute(originRef, destinationRef)}
        >
          Show Route
        </Button>
        <Button
          className="clear-btn button"
          onClick={() => onClearRoute(originRef, destinationRef)}
        >
          Clear
        </Button>
      </Row>
      <div className="distance-durattion-container">
        <div>Distance: {distance}</div>
        <div>Duration: {duration}</div>
      </div>
    </Container>
  );
};

export default SearchBox;
