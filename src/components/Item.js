import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardHeader,
} from "reactstrap";

const Item = ({ title, img, alt, precio, stock }) => {
  return (
    <>
      <Card style={{ marginBottom: "2rem" }} className="border-secondary mb-2">
        <CardImg top width="100%" height="150px" src={img} alt={alt} />
        <CardHeader tag="h5">{title} </CardHeader>
        <CardBody>
          <CardText>Precio por kilo: ${precio}</CardText>
          <Button color="secondary">Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default Item;
