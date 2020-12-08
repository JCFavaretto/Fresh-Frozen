import React, { useState, useContext } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
} from "reactstrap";
import ItemCount from "components/ItemCount";
import Carrito from "context/CartContext";

const Item = ({ id, title, img, alt, precio, stock }) => {
  const [count, setCount] = useState(0);
  const [{ addToCart }] = useContext(Carrito);

  const cartItem = {
    count,
    id,
    title,
    img,
    precio,
  };

  return (
    <>
      <Card style={{ marginBottom: "2rem" }} className="border-secondary mb-2">
        <CardImg top width="100%" height="150px" src={img} alt={alt} />
        <CardHeader tag="h5">{title} </CardHeader>
        <CardBody>
          <CardText>Precio por kilo: ${precio}</CardText>

          <Button color="secondary">Comprar</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default Item;
