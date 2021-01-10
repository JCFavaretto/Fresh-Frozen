import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

function FormularioEnvio({ editar, toggleEdit, datos }) {
  return (
    <Modal isOpen={editar} toggle={toggleEdit} className="jumbotron">
      <ModalHeader>Datos de Envio</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="street"
              value={datos.street}
              placeholder="Calle"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              name="number"
              value={datos.number}
              placeholder="Altura"
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="dept"
              value={datos.dept}
              placeholder="Ingresar piso, departamento o dato de importancia "
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              name="phoneNumber"
              value={datos.phoneNumber}
              placeholder="Numero de Telefono"
              required
            />
          </FormGroup>
          <ModalFooter className="justify-content-around">
            <Button color="secondary">Guardar</Button>
            <Button color="info" onClick={toggleEdit}>
              Cancelar
            </Button>
          </ModalFooter>
        </Form>{" "}
      </ModalBody>
    </Modal>
  );
}

export default FormularioEnvio;
