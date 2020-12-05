import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Cart = ({ modal, toggleModal }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="jumbotron">
        <ModalHeader toggle={toggleModal}>Carrito</ModalHeader>
        <ModalBody>
          El carrito esta vacio. Ir a
          <NavLink to="/products" onClick={toggleModal}>
            {" "}
            Productos
          </NavLink>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Hacer algo
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
