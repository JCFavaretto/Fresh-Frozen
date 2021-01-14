import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "context/AuthContext";
import Carrito from "context/CartContext";
import Login from "pages/Login";
import CartTable from "components/CartTable";
import FormularioEnvio from "components/FormularioEnvio";

function Comprar() {
  const [{ cart, removeFromCart, totalGasto }] = useContext(Carrito);
  const [{ user }] = useContext(AuthContext);
  const [datos, setDatos] = useState({
    street: "",
    number: "",
    floor: "",
    dept: "",
    phoneNumber: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

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

          <h4 className="sub-h3 separador text-center">Datos de envio</h4>
          <FormularioEnvio datos={datos} handleInput={handleInput} />
        </>
      )}
    </div>
  );
}

export default Comprar;
