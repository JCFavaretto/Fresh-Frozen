import React from "react";
import { Button, Col } from "reactstrap";

function ItemCount({ count, setCount, max }) {
  function restar() {
    if (count > 0) {
      setCount((count) => count - 0.5);
    } else {
      console.log("No se puede bajar mas");
    }
    return false;
  }

  function sumar() {
    if (count < max) {
      setCount((count) => count + 0.5);
    } else {
      console.log("No hay mas stock");
    }
    return false;
  }

  return (
    <Col
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        padding: "0",
        flexGrow: "0",
      }}
    >
      <Button
        style={{ padding: "0.2rem 0.5rem", borderRadius: "0" }}
        onClick={restar}
      >
        -
      </Button>
      <p
        style={{
          marginTop: "1rem",
          padding: "0.3rem 0.4rem",
          border: "1px solid var(--secondary)",
          borderRadius: "0",
          width: "75px",
        }}
      >
        {count} kg.
      </p>
      <Button
        style={{ padding: "0.2rem 0.5rem", borderRadius: "0" }}
        onClick={sumar}
      >
        +
      </Button>
    </Col>
  );
}

export default ItemCount;
