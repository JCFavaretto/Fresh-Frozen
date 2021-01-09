import React from "react";
import ItemList from "components/ItemList";

function Products() {
  return (
    <>
      <h2 className="sub-h3">Nuestros Productos</h2>
      <div
        style={{
          borderBottom: "1px solid var(--secondary)",
        }}
      ></div>
      <ItemList />
    </>
  );
}

export default Products;
