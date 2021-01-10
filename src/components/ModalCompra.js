import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "reactstrap";

function ModalCompra({ modal, toggle }) {
  const [loading, setLoading] = useState(true);

  return (
    <Modal isOpen={modal} toggle={toggle} className="jumbotron">
      <ModalHeader toggle={toggle}>Compra en Proceso</ModalHeader>
      <ModalBody>
        <div
          style={{ width: "100%", minHeight: "200px", position: "relative" }}
        >
          <p>Verificando Stock</p>
          <Spinner
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              margin: "auto",
              width: "3rem",
              height: "3rem",
            }}
            color="primary"
          />
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ModalCompra;
