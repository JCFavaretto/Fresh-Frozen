import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardHeader,
} from "reactstrap";
import ItemDetail from "components/ItemDetail";

const Item = ({ id, title, img, alt, precio, stock }) => {
  const [count, setCount] = useState(0);

  const cartItem = {
    count,
    id,
    title,
    img,
    precio,
  };

  const [modal2, setModal] = useState(false);
  const toggleModal = () => setModal(!modal2);

  return (
    <>
      <Card style={{ marginBottom: "2rem" }} className="border-secondary mb-2">
        <CardImg top width="100%" height="150px" src={img} alt={alt} />
        <CardHeader tag="h5">{title} </CardHeader>
        <CardBody>
          <CardText>Precio por kilo: ${precio}</CardText>

          <Button color="secondary" onClick={toggleModal}>
            Comprar
          </Button>
          <ItemDetail
            alt={alt}
            modal={modal2}
            toggleModal={toggleModal}
            cartItem={cartItem}
            setCount={setCount}
            stock={stock}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default Item;
