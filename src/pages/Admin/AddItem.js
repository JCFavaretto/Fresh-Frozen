import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Form,
  FormGroup,
  Button,
} from "reactstrap";

function AddItem() {
  return (
    <div className="jumbotron">
      <h3
        style={{
          borderBottom: "1px solid var(--success)",
          widht: "90px",
          paddingBottom: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        Agregar nuevo producto{" "}
      </h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="material-icons icon-success">attachment</i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="Nombre del producto" required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="material-icons icon-success">create</i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="textarea"
              placeholder="Descripcion del producto"
              required
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <label for="nuevaimg">Seleccione Imagen del producto</label>
          <Input
            className="btn btn-success"
            type="file"
            id="nuevaimg"
            required
          />
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="material-icons icon-success">monetization_on</i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="number" required placeholder="Precio del producto" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="material-icons icon-success">shopping_cart</i>
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              required
              placeholder="Stock actual del producto"
            />
          </InputGroup>
        </FormGroup>
        <Button className="btn-success"> Agregar</Button>
      </Form>
    </div>
  );
}

export default AddItem;
