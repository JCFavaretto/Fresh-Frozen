import React from "react";

function Nosotros() {
  return (
    <div style={{ color: "white" }}>
      {" "}
      <h3 className="sub-h3 separador">Sobre nosotros</h3>
      <p className="mb-5">
        Somos un emprendimiento familiar. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vel, et delectus? Ipsa nisi possimus similique quo
        amet, eum saepe dolorum architecto dolore animi sed asperiores ad. Sint
        voluptas nisi rem.
      </p>
      <h4 className="sub-h3 separador mt-5">Metodos de trabajo</h4>
      <ul>
        <li style={{ color: "white", listStyle: "square inside" }}>
          Dias y Horarios de Reparto
        </li>
        <li style={{ color: "white", listStyle: "square inside" }}>
          Formas de pago
        </li>
        <li style={{ color: "white", listStyle: "square inside" }}>
          Mas informacion
        </li>
      </ul>
    </div>
  );
}

export default Nosotros;
