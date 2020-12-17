import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Jumbotron, Row } from "reactstrap";

function HomeAdmin() {
  return (
    <Jumbotron style={{ minHeight: "70vh" }}>
      <h1>Panel de control</h1>
      <Row xs="1" className="mt-4">
        <NavLink to="/admin/additem">
          <Col className="panel-control">Agregar producto nuevo</Col>
        </NavLink>
        <NavLink to="/admin/items">
          <Col className="panel-control">Ver los productos</Col>
        </NavLink>
        <NavLink to="/admin/banners">
          <Col className="panel-control">Imagenes Banner</Col>
        </NavLink>
        <NavLink to="/admin/banners">
          <Col className="panel-control">Ver administradores</Col>
        </NavLink>
      </Row>
    </Jumbotron>
  );
}

export default HomeAdmin;
