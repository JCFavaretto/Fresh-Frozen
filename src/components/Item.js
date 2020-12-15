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

const Item = ({ id, name, img, alt, price, stock }) => {
  const [count, setCount] = useState(0);

  const cartItem = {
    count,
    id,
    name,
    img,
    price,
    stock,
  };

  const [modal2, setModal] = useState(false);
  const toggleModal = () => setModal(!modal2);

  return (
    <Card style={{ marginBottom: "2rem" }} className="border-secondary mb-2">
      <CardImg top width="100%" height="150px" src={img} alt={alt} />
      <CardHeader tag="h5" style={{ minHeight: "73px" }}>
        {name}{" "}
      </CardHeader>
      <CardBody>
        <CardText style={{ minHeight: "48px" }}>
          Precio por kilo: ${price}
        </CardText>

        <Button color="secondary" onClick={toggleModal}>
          Comprar
        </Button>
        <ItemDetail
          alt={alt}
          modal={modal2}
          toggleModal={toggleModal}
          cartItem={cartItem}
          count={count}
          setCount={setCount}
        />
      </CardBody>
    </Card>
  );
};

export default Item;
