import React from "react";
import ItemList from "components/ItemList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Products() {
  const { cat } = useParams();
  return (
    <>
      {cat === "congelado" ? (
        <h2 className="sub-h3">Sección Congelados</h2>
      ) : cat === "onSale" ? (
        <h2 className="sub-h3">Las Mejores Ofertas</h2>
      ) : cat === "fresco" ? (
        <h2 className="sub-h3">Sección Frescos</h2>
      ) : cat === "rebozado" ? (
        <h2 className="sub-h3">Sección Rebozados</h2>
      ) : (
        <h2 className="sub-h3">Nuestros Productos</h2>
      )}

      <div
        style={{
          borderBottom: "1px solid var(--secondary)",
        }}
      ></div>
      <ItemList cat={cat} />
    </>
  );
}

export default Products;
