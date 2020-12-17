import React from "react";
import { useGetFirestore } from "hooks/useGetFirestore";
import { Row, Col, Spinner } from "reactstrap";
import Item from "components/Item";

function ItemList() {
  const { loading, productos } = useGetFirestore();

  return (
    <div className="mt-5">
      {loading ? (
        <div style={{ alignItems: "center" }}>
          <Spinner
            style={{ margin: "0 auto", width: "4rem", height: "4rem" }}
            type="grow"
            color="secondary"
          />
        </div>
      ) : (
        <Row sm="2" md="3" lg="4">
          {Array.isArray(productos) &&
            productos.map((item) => {
              return (
                <Col key={item.id}>
                  <Item
                    id={item.id}
                    name={item.name}
                    img={item.img}
                    alt={item.alt}
                    price={item.price}
                    stock={item.stock}
                  />
                </Col>
              );
            })}
        </Row>
      )}
    </div>
  );
}

export default ItemList;
