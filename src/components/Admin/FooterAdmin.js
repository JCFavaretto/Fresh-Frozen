import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { fb } from "fire";

function FooterAdmin() {
  return (
    <div className="footer footer-admin">
      <Container>
        <Row xs="1">
          <Col>
            <Button
              style={{ marginTop: "1rem" }}
              color="primary"
              onClick={() => {
                fb.auth().signOut();
              }}
            >
              Cerrar Sesion
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterAdmin;
