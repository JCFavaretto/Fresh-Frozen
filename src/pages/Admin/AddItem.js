import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemForm from "components/Admin/ItemForm";
import { db, storage } from "fire.js";
import { Alert, Jumbotron, Spinner } from "reactstrap";

const separador = {
  borderBottom: "1px solid var(--secondary)",
  widht: "90px",
  paddingBottom: "0.5rem",
  marginBottom: "2rem",
};

const AddItem = () => {
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const addItem = (item) => {
    setLoading(true);
    const uploadTask = storage.ref(`images/${item.name}`).put(item.img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(item.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("items").doc().set({
              name: item.name,
              alt: item.alt,
              img: url,
              price: item.price,
              stock: item.stock,
              sold: item.sold,
              onSale: item.onSale,
            });
          })
          .then(setLoading(false))
          .then(setAlert(true))
          .then(
            setTimeout(() => {
              history.push("/admin");
            }, 2000)
          )
          .catch((err) => {
            console.log("Error guardando el producto: " + err);
          });
      }
    );
  };

  return (
    <Jumbotron>
      <Alert
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: "1030",
        }}
        isOpen={alert}
        toggle={() => setAlert(false)}
        color="primary"
        fade
      >
        Producto Guardado
      </Alert>
      {loading && (
        <Spinner
          style={{
            position: "fixed",
            top: "1rem",
            right: "3rem",
            zIndex: "10300",
            width: "3rem",
            height: "3rem",
          }}
          type="grow"
          color="primary"
        />
      )}
      <h3 style={separador}>Agregar nuevo producto</h3>
      <ItemForm addItem={addItem} />
    </Jumbotron>
  );
};

export default AddItem;
