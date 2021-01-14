import React, { useContext, useState } from "react";
import { db, firebase } from "fire";
import { Modal, ModalHeader, ModalBody, Spinner, Button } from "reactstrap";
import AuthContext from "context/AuthContext";
import Carrito from "context/CartContext";
import { NavLink } from "react-router-dom";

function ModalCompra({ datos, modal, toggle }) {
  const [{ cart, setCart, totalGasto, emptyStorage, updateStock }] = useContext(
    Carrito
  );

  const [{ user }] = useContext(AuthContext);
  const [{ updateOrders }] = useContext(AuthContext);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const enviarOrden = () => {
    const order = {
      buyer: {
        name: user.name,
        email: user.Email,
        datos,
      },
      cart: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalGasto(),
    };

    setLoading(true);
    db.collection("orders")
      .add(order)
      .then(({ id }) => {
        setId(id);
        console.log("Compra Exitosa! Su ID de compra es: " + id);
        return id;
      })
      .then((id) => {
        updateOrders(id);
        db.collection("users")
          .doc(user.uid)
          .update({
            orders: firebase.firestore.FieldValue.arrayUnion(id),
          });
      })
      .catch((err) => {
        console.log("error: " + err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
        updateStock(cart);
        setTimeout(() => {
          setCart(() => []);
          emptyStorage();
        }, 2000);
      });
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className="jumbotron">
      <ModalHeader toggle={toggle}>
        {loading
          ? "Compra en Proceso"
          : id === ""
          ? "Confime los datos"
          : "Compra Finalizada"}
      </ModalHeader>
      <ModalBody className="d-flex flex-column">
        {loading ? (
          <div
            style={{ width: "100%", minHeight: "200px", position: "relative" }}
          >
            <p>Verificando Stock</p>
            <Spinner
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                margin: "auto",
                width: "3rem",
                height: "3rem",
              }}
              color="primary"
            />
          </div>
        ) : id === "" ? (
          <>
            <ul>
              <li className="d-flex justify-content-between">
                <p>Dirección: </p>{" "}
                <span>{datos.street + " " + datos.number}</span>
              </li>
              {datos.floor !== "" && (
                <li className="d-flex justify-content-between">
                  <p>Piso: </p>
                  <span>{datos.floor}</span>{" "}
                </li>
              )}
              {datos.dept !== "" && (
                <li className="d-flex justify-content-between">
                  <p>Departamento: </p>
                  <span>{datos.dept}</span>{" "}
                </li>
              )}
              <li className="d-flex justify-content-between">
                <p> Numero de contacto: </p>
                <span>{datos.phoneNumber}</span>
              </li>
              <li className="d-flex justify-content-between">
                <p> Gasto total: </p>
                <span>${totalGasto()}</span>{" "}
              </li>
            </ul>
            <Button
              style={{ margin: "2rem auto", marginBottom: "1rem" }}
              color="primary"
              onClick={() => enviarOrden()}
            >
              Finalizar Compra
            </Button>
          </>
        ) : (
          <>
            {id && `Compra Exitosa! Su orden de compra es: ${id}`}{" "}
            {error && `Compra fallida: ${error}`}{" "}
            <Button
              style={{ margin: "2rem auto", marginBottom: "1rem" }}
              color="secondary"
            >
              <NavLink to="/">Volver</NavLink>
            </Button>
          </>
        )}
      </ModalBody>
    </Modal>
  );
}

export default ModalCompra;
