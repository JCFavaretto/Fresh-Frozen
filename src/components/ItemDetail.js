import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Carrito from "context/CartContext";
import ItemCount from "components/ItemCount";

const ItemDetail = ({ alt, modal, toggleModal, count, setCount, cartItem }) => {
  const [{ addToCart }] = useContext(Carrito);

  function add() {
    addToCart({ cartItem });
    setCount(0);
    toggleModal();
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="jumbotron">
        <ModalHeader toggle={toggleModal}>{cartItem.name} </ModalHeader>
        <ModalBody>{alt}</ModalBody>

        <ModalFooter>
          <ItemCount
            count={cartItem.count}
            setCount={setCount}
            max={cartItem.stock}
          />
          <Button
            style={{ minWidth: "100px" }}
            color="secondary"
            onClick={() => add()}
            disabled={count === 0}
          >
            <FontAwesomeIcon icon={faCartPlus} />
            <span>
              {" "}
              {count > 0 && "$"}
              {count > 0 && cartItem.price * count}{" "}
            </span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ItemDetail;
