import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

function AddBanner({ addBanner, modal, toggleModal }) {
  const [banner, setBanner] = useState({
    name: "",
    alt: "",
    path: "",
    storage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBanner({ ...banner, [name]: value });
  };

  const handleFileInput = (e) => {
    setBanner({ ...banner, storage: e.target.files[0] });
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggleModal} className="jumbotron">
        <ModalHeader toggle={toggleModal}>
          <h4>Guardar nuevo banner</h4>{" "}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="Ingrese nombre"
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="alt"
                placeholder="Ingrese corta descripcion de la imagen"
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="path"
                placeholder="Ingrese direccion de pagina"
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input type="file" onChange={handleFileInput} required />
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button
            style={{ minWidth: "100px" }}
            color="primary"
            onClick={() => addBanner(banner)}
          >
            Agregar
          </Button>
          <Button style={{ minWidth: "100px" }} color="secondary">
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddBanner;
