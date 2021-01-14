import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import BotonCompra from "./BotonCompra";

function FormularioEnvio({ handleInput, datos }) {
  return (
    <Form className="d-flex flex-column">
      <FormGroup>
        <Input
          type="text"
          name="street"
          onChange={handleInput}
          placeholder="Calle*"
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          name="number"
          onChange={handleInput}
          placeholder="Altura*"
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="floor"
          onChange={handleInput}
          placeholder="Ingresar numero de piso"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="dept"
          placeholder="Ingresar departamento o dato de importancia "
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          name="phoneNumber"
          placeholder="Numero de Telefono*"
          onChange={handleInput}
          required
        />
      </FormGroup>

      <BotonCompra datos={datos} />
    </Form>
  );
}

export default FormularioEnvio;
