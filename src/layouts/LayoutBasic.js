import Header from "components/Header";
import Footer from "components/Footer";
import LoadRouters from "components/LoadRouters";
import React from "react";
import { Col, Container, Row } from "reactstrap";

function LayoutBasic({ routes }) {
  return (
    <>
      <Header />

      <Container className="content">
        <Row>
          <Col>
            <LoadRouters routes={routes} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default LayoutBasic;
