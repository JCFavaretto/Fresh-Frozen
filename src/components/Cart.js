import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import Carrito from "context/CartContext";
import AuthContext from "context/AuthContext";

const Cart = ({ modal, toggleModal }) => {
  const [{ cart, calcularCantidad, removeFromCart, totalGasto }] = useContext(
    Carrito
  );
  const [{ user }] = useContext(AuthContext);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="jumbotron">
        <ModalHeader toggle={toggleModal}>Carrito</ModalHeader>
        {calcularCantidad() === 0 ? (
          <ModalBody>
            El carrito esta vacio. Ir a
            <NavLink to="/products" onClick={toggleModal}>
              {" "}
              Productos
            </NavLink>
          </ModalBody>
        ) : (
          <ModalBody>
            {cart.map((item) => {
              return (
                <Row key={item.id}>
                  <Col xs="3">{item.count} kg.</Col>
                  <Col xs="4"> {item.name}</Col>
                  <Col xs="3">${item.price * item.count} </Col>
                  <Col xs="2">
                    <FontAwesomeIcon
                      style={{
                        color: "var(--secondary-dark)",
                        fontSize: "1.2  rem",
                      }}
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                      className="hover-pointer"
                      icon={faTrashAlt}
                    />{" "}
                  </Col>
                </Row>
              );
            })}{" "}
            <p
              style={{
                textAlign: "end",
                marginTop: "2rem",
                color: "var(--secondary-dark)",
              }}
            >
              TOTAL: ${totalGasto()}
            </p>
          </ModalBody>
        )}
        <ModalFooter className="justify-content-around">
          {calcularCantidad() === 0 ? (
            <Link style={{ color: "white" }} to="/products">
              <Button color="primary" onClick={toggleModal}>
                Ir a Productos
              </Button>
            </Link>
          ) : user.loggedIn ? (
            <Link style={{ color: "white" }} to="/comprar">
              <Button color="primary" onClick={toggleModal}>
                {" "}
                Comprar
              </Button>
            </Link>
          ) : (
            <Link style={{ color: "white" }} to="/login" onClick={toggleModal}>
              <Button color="primary">Ingresar</Button>
            </Link>
          )}
          <Button color="secondary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Cart;
