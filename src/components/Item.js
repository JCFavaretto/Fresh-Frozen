import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  Button,
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
    <Card
      style={{
        margin: "0 auto",
        maxWidth: "300px",
        textAlign: "center",
        color: "#5a5a5a",
      }}
      className="border-secondary mb-2 hover-pointer"
      onClick={toggleModal}
    >
      <CardImg top width="100%" height="150px" src={img} alt={alt} />
      <CardHeader tag="h5" style={{ minHeight: "73px" }}>
        {name}
      </CardHeader>
      <CardBody
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardText
          style={{ minHeight: "30px", fontSize: "1.2rem" }}
          className="d-flex flex-column"
        >
          <span> Precio por kilo:</span>
          <Button style={{ width: "5rem", margin: "0 auto" }} color="secondary">
            {" "}
            ${price}
          </Button>
        </CardText>

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
