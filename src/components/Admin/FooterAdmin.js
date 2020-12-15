import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

function FooterAdmin() {
  return (
    <div className="footer footer-admin">
      <Container>
        <Row xs="1">
          <Col>
            <Button style={{ marginTop: "1rem" }} color="primary">
              Cerrar Sesion
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterAdmin;
