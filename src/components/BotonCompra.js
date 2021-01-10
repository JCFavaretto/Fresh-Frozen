import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { db, fb } from "fire";
import AuthContext from "context/AuthContext";
import Carrito from "context/CartContext";
import { Button } from "reactstrap";
import ModalCompra from "./ModalCompra";

function BotonCompra({ user }) {
  const [{ cart, setCart, totalGasto, emptyStorage, updateStock }] = useContext(
    Carrito
  );
  const [{ updateOrders }] = useContext(AuthContext);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [compra, setCompra] = useState(false);
  const toggle = () => setCompra(!compra);

  const enviarOrden = () => {
    const newOrder = {
      buyer: {
        name: user.name,
        phone: user.phoneNumber,
        email: user.email,
        address:
          user.address.street +
          " " +
          user.address.number +
          " " +
          user.address.dept,
      },
      cart: cart,
      date: fb.firestore.Timestamp.fromDate(new Date()),
      total: totalGasto(),
    };

    setLoading(true);
    db.collection("orders")
      .add(newOrder)
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
            orders: fb.firestore.FieldValue.arrayUnion(id),
          });
      })
      .catch((err) => {
        console.log("error: " + err);
      })
      .finally(() => {
        setLoading(false);
        updateStock(cart);
        setTimeout(() => {
          setCart(() => []);
          emptyStorage();
          history.push("/productos");
        }, 2000);
      });
  };

  return (
    <>
      <ModalCompra modal={compra} toggle={toggle} />{" "}
      <Button color="primary" onClick={toggle}>
        Confirmar Compra
      </Button>
    </>
  );
}

export default BotonCompra;
