import React from "react";
import { items } from "assets/items";
import { Row, Col } from "reactstrap";
import Item from "./Item";

function ItemList() {
  return (
    <div className="mt-5">
      <Row sm="2" md="3" lg="4">
        {items.map((item) => {
          return (
            <Col>
              <Item
                title={item.nombre}
                img={item.img}
                alt={item.alt}
                precio={item.precio}
                stock={item.stock}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ItemList;
