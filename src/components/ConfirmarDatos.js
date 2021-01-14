import React, { useState } from "react";
import { Button } from "reactstrap";
import FormularioEnvio from "components/FormularioEnvio";

function ConfirmarDatos({ datos, handleInput, user }) {
  const [editar, setEditar] = useState(false);
  const toggleEdit = () => setEditar(!editar);

  return (
    <>
      <FormularioEnvio editar={editar} toggleEdit={toggleEdit} datos={datos} />
      <Button color="secondary" onClick={toggleEdit}>
        Editar
      </Button>
    </>
  );
}

export default ConfirmarDatos;
