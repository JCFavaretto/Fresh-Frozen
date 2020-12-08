import React, { useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Carrito from "context/CartContext";
import ItemCount from "components/ItemCount";

const ItemDetail = ({ alt, modal, toggleModal, setCount, cartItem, stock }) => {
  const [{ addToCart }] = useContext(Carrito);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="jumbotron">
        <ModalHeader toggle={toggleModal}>{cartItem.title} </ModalHeader>
        <ModalBody>{alt}</ModalBody>

        <ModalFooter>
          <ItemCount count={cartItem.count} setCount={setCount} max={stock} />
          <Button color="secondary" onClick={() => addToCart({ cartItem })}>
            Agregar al Carrito
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ItemDetail;
