import React, { useState } from "react";
import { Input, Form, FormGroup, Button, Label } from "reactstrap";

const ItemForm = ({ addItem }) => {
  const initialValues = {
    name: "",
    alt: "",
    cat: "fresco",
    img: "",
    price: "",
    stock: "",
    sold: 0,
    onSale: false,
  };

  const [item, setItem] = useState(initialValues);
  console.log(item);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setItem({ ...item, [name]: value });
  };

  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    setItem({ ...item, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="alt"
          placeholder="Descripcion del producto"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Categoria: </Label>
        <Input
          type="select"
          name="cat"
          id="exampleSelect"
          defaultValue={initialValues.cat}
          onChange={handleInputChange}
        >
          <option>fresco</option>
          <option>congelado</option>
          <option>rebozado</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <label htmlFor="nuevaimg">Seleccione Imagen del producto</label>
        <Input
          className="btn btn-secondary"
          type="file"
          id="nuevaimg"
          name="img"
          onChange={handleFileInput}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          name="price"
          placeholder="Precio del producto"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          name="stock"
          placeholder="Stock actual del producto"
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <Button className="btn-secondary"> Agregar</Button>
    </Form>
  );
};

export default ItemForm;
