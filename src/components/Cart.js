import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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

const Cart = ({ modal, toggleModal }) => {
  const [{ cart, calcularCantidad, removeFromCart }] = useContext(Carrito);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="jumbotron">
        <ModalHeader toggle={toggleModal}>Carrito</ModalHeader>
        {calcularCantidad === 0 ? (
          <ModalBody>
            "El carrito esta vacio. Ir a"
            <NavLink to="/products" onClick={toggleModal}>
              {" "}
              Productos
            </NavLink>
          </ModalBody>
        ) : (
          <ModalBody>
            {cart.map((item) => {
              return (
                <Row>
                  <Col xs="2">{item.count}</Col>
                  <Col xs="8"> {item.title}</Col>
                  <Col xs="2">
                    <i
                      style={{ color: "var(--secondary-dark)" }}
                      className="material-icons"
                      onClick={() => removeFromCart(item.id)}
                    >
                      highlight_off
                    </i>
                  </Col>
                </Row>
              );
            })}
          </ModalBody>
        )}
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Comprar
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Cart;
