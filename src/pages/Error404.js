import React from "react";

function Error404() {
  return (
    <div className="jumbotron" style={{ minHeight: "500px" }}>
      <h1>Pagina no encontrada</h1>
      <div
        style={{
          borderBottom: "1px solid var(--secondary)",
          widht: "90px",
          marginBottom: "1rem",
        }}
      ></div>
      <h4>La pagina no existe.</h4>
    </div>
  );
}

export default Error404;
