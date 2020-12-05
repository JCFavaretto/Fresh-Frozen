import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer ">
      <Container>
        <Row xs="1" md="3">
          <Col>Nosotros</Col>
          <Col>Navegacion</Col>
          <Col>Nuestras Redes Sociales</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
