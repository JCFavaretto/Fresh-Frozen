import React from "react";
import HeaderAdmin from "components/Admin/HeaderAdmin";
import LoadRouters from "components/LoadRouters";
import { Col, Container, Row } from "reactstrap";
import FooterAdmin from "components/Admin/FooterAdmin";

function LayoutAdmin({ routes }) {
  return (
    <div>
      <HeaderAdmin />

      <Container className="content">
        <Row>
          <Col>
            <LoadRouters routes={routes} />
          </Col>
        </Row>
      </Container>
      <FooterAdmin />
    </div>
  );
}

export default LayoutAdmin;
