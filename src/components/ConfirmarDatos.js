import React, { useState } from "react";
import { Button } from "reactstrap";
import BotonCompra from "./BotonCompra";
import FormularioEnvio from "./FormularioEnvio";

function ConfirmarDatos({ datos, handleInput, user }) {
  const [editar, setEditar] = useState(false);
  const toggleEdit = () => setEditar(!editar);

  return (
    <>
      <h4 className="sub-h3 separador">Datos de envio</h4>

      <FormularioEnvio editar={editar} toggleEdit={toggleEdit} datos={datos} />
      <div className="d-flex justify-content-around">
        <Button color="secondary" onClick={toggleEdit}>
          Editar
        </Button>
        <BotonCompra user={user} />
      </div>
    </>
  );
}

export default ConfirmarDatos;
