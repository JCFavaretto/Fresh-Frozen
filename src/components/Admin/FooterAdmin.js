import React from "react";
import { Col, Container, Row } from "reactstrap";

function FooterAdmin() {
  return (
    <div className="footer footer-admin">
      <Container>
        <Row xs="1" md="3">
          <Col>Nosotros</Col>
          <Col>Navegacion</Col>
          <Col>Nuestras Redes Sociales</Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterAdmin;
