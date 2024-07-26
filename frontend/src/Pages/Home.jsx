import { Container, Row, Col } from "react-bootstrap";
import Map from "../components/Map/Map";
import Alerts from "../components/Alerts/Alerts";

import "./style.css";
export default function Home() {
  return (
    <Container fluid className="home">
      <Row>
        <Col xs={12} md={9} className="map-container">
          <Map />
        </Col>
        <Col xs={12} md={3} className="alerts-container">
          <div className="alert-head">
            <span>
              <strong>Alerts</strong>
            </span>
          </div>
          <Alerts />
        </Col>
      </Row>
    </Container>
  );
}
