import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import ModalCompra from "./ModalCompra";

function BotonCompra({ datos }) {
  const [compra, setCompra] = useState(false);
  const [dis, setDis] = useState(true);
  const toggle = () => setCompra(!compra);

  const checkeoDatos = () => {
    if (
      datos.street !== "" &&
      datos.number !== "" &&
      datos.phoneNumber !== ""
    ) {
      setDis(false);
    } else {
      setDis(true);
    }
  };

  useEffect(() => {
    checkeoDatos();
  }, [datos]); //eslint-disable-line

  return (
    <>
      <ModalCompra datos={datos} modal={compra} toggle={toggle} />{" "}
      <Button
        style={{ margin: "0 auto" }}
        color="primary"
        onClick={toggle}
        disabled={dis}
      >
        Confirmar Compra
      </Button>
    </>
  );
}

export default BotonCompra;
