import React, { useEffect, useState } from "react";
import { useSingleFirestore } from "hooks/useSingleFirestore";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link, useHistory } from "react-router-dom";
import { db, storage } from "fire";

function EditItem() {
  const { id } = useParams();
  const history = useHistory();

  const { loading, producto } = useSingleFirestore(id);
  const [item, setItem] = useState(producto);

  useEffect(() => {
    setItem(producto);
  }, [producto]);

  function handleInputChange(e) {
    const { name, value, checked } = e.target;
    if (name === "onSale") {
      setItem({ ...item, [name]: checked });
    } else {
      setItem({ ...item, [name]: value });
    }
  }
  function handleEdit(id) {
    db.collection("items")
      .doc(id)
      .update(item)
      .then(() => {
        console.log("Producto Actualizado");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        history.push("/admin/items");
      });
  }

  function handleDelete(name, id) {
    if (window.confirm("Confime para eliminar producto")) {
      storage
        .ref()
        .child(`images/${name}`)
        .delete()
        .then(() => {
          db.collection("items")
            .doc(id)
            .delete()
            .then(() => {
              console.log("Articulo eliminado");
            });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          history.push("/admin/items");
        });
    }
  }

  return (
    <Jumbotron style={{ position: "relative", minHeight: "70vh" }}>
      <h3 className="separador">Editar articulo</h3>
      {loading ? (
        <Spinner
          style={{ position: "absolute", top: "10rem", left: "5rem" }}
          color="primary"
        />
      ) : (
        <>
          <img
            style={{ margin: "1rem auto", border: "1px solid var(--dark)" }}
            src={item.img}
            alt={item.alt}
            height="200px"
          />
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="name"
                value={item.name}
                onChange={handleInputChange}
                placeholder="Nombre del producto"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="textarea"
                name="alt"
                value={item.alt}
                onChange={handleInputChange}
                placeholder="Descripcion del producto"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Categoria: </Label>
              <Input
                type="select"
                name="cat"
                id="exampleSelect"
                defaultValue={item.cat}
                onChange={handleInputChange}
              >
                <option>fresco</option>
                <option>congelado</option>
                <option>rebozado</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="number"
                name="price"
                value={item.price}
                onChange={handleInputChange}
                placeholder="Precio del producto"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="number"
                name="stock"
                value={item.stock}
                onChange={handleInputChange}
                placeholder="Stock actual del producto"
                required
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="onSale"
                  defaultChecked={item.onSale}
                  onChange={handleInputChange}
                />
                Esta en oferta
              </Label>
            </FormGroup>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "2rem",
              }}
            >
              <Button
                style={{ minWidth: "100px" }}
                color="info"
                onClick={() => handleEdit(id)}
              >
                Guardar
              </Button>{" "}
              <Link to="/admin/items">
                <Button style={{ minWidth: "100px" }} color="success">
                  Cancelar
                </Button>
              </Link>{" "}
              <Button
                style={{ minWidth: "100px" }}
                color="secondary"
                onClick={() => handleDelete(item.storage, item.id)}
              >
                Eliminar
              </Button>
            </div>
          </Form>
        </>
      )}
    </Jumbotron>
  );
}

export default EditItem;
