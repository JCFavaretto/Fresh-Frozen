import React, { useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "context/AuthContext";
import Carrito from "context/CartContext";
import CartTable from "components/CartTable";
import Login from "pages/Login";
import ConfirmarDatos from "components/ConfirmarDatos";

function Comprar() {
  const [{ cart, removeFromCart, totalGasto }] = useContext(Carrito);
  const [{ user }] = useContext(AuthContext);
  const [datos, setDatos] = useState({
    street: "",
    number: "",
    dept: "",
    phoneNumber: "",
  });
  console.log(datos);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDatos({ ...user, [name]: value });
  };

  useEffect(() => {
    if (user.address) {
      const { address, phoneNumber } = user;
      console.log(address);
      setDatos({ ...address, phoneNumber });
    }
  }, [user]);

  return (
    <div>
      {!user.loggedIn ? (
        <>
          <Route path="/login" component={Login} />
          <Redirect to="/login" />
        </>
      ) : (
        <>
          <h2 className="sub-h3 separador">Detalles de la compra</h2>
          <CartTable cart={cart} remover={removeFromCart} total={totalGasto} />
          <ConfirmarDatos datos={datos} handleInput={handleInput} user={user} />
        </>
      )}
    </div>
  );
}

export default Comprar;
