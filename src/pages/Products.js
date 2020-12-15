import React from "react";
import ItemList from "components/ItemList";
import { Jumbotron } from "reactstrap";

function Products() {
  return (
    <Jumbotron>
      <h2>Nuestros Productos</h2>
      <div
        style={{
          borderBottom: "1px solid var(--secondary)",
        }}
      ></div>
      <ItemList />
    </Jumbotron>
  );
}

export default Products;
