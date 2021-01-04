import React, { useContext } from "react";
import HeaderAdmin from "components/Admin/HeaderAdmin";
import LoadRouters from "components/LoadRouters";
import { Col, Container, Jumbotron, Row, Spinner } from "reactstrap";
import FooterAdmin from "components/Admin/FooterAdmin";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import LoginAdmin from "pages/Admin/LoginAdmin";
import AuthContext from "context/AuthContext";

function LayoutAdmin({ routes }) {
  const [{ user, loading }] = useContext(AuthContext);
  if (!loading) {
    if (!user || !user.loggedIn) {
      return (
        <>
          <Route path="/admin/login" component={LoginAdmin} />
          <Redirect to="/admin/login" />
        </>
      );
    } else {
      return (
        <div>
          <HeaderAdmin />
          {user.role === "admin" ? (
            <Container fluid className="content">
              <Row>
                <Col>
                  <LoadRouters routes={routes} />
                </Col>
              </Row>
            </Container>
          ) : (
            <Jumbotron className="content">
              <h1>Todavia no esta autorizado</h1>
            </Jumbotron>
          )}
          <FooterAdmin />
        </div>
      );
    }
  } else {
    return (
      <Spinner
        style={{ width: "10rem", height: "10rem" }}
        type="grow"
        color="primary"
      />
    );
  }
}

export default LayoutAdmin;
