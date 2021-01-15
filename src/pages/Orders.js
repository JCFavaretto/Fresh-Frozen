import CartTable from "components/CartTable";
import { useOrders } from "hooks/useOrders";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Spinner } from "reactstrap";

function Orders() {
  const { loading, orders } = useOrders();
  const [order, setOrder] = useState(false);
  const [misOrdenes, setMisOrdenes] = useState("");

  useEffect(() => {
    if (Array.isArray(orders)) {
      setOrder(orders[0]);
      setMisOrdenes(orders);
    }
  }, [orders]);

  return (
    <div>
      <h3 className="sub-h3 separador">Mis compras</h3>

      {loading ? (
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
          <Spinner
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              margin: "auto",
              width: "5rem",
              height: "5rem",
            }}
            type="grow"
            color="secondary"
          />{" "}
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center">
          <h3 className="sub-h3">No tenes ningun registro de compra</h3>
          <h4 className="sub-h3">Que estas esperando?</h4>
          <h4 className="sub-h3">No te pierdas nuestras ofertas!</h4>
          <NavLink to="/products">
            <Button style={{ margin: "0 auto" }} color="primary">
              Ir a Productos
            </Button>
          </NavLink>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center invertir">
          <div className="d-flex flex-column card lista-ordenes">
            {Array.isArray(misOrdenes) && (
              <ul className="card-body">
                {misOrdenes.map((order) => {
                  return (
                    <li
                      style={{ lineHeight: "1.5" }}
                      key={order.id}
                      onClick={() => setOrder(order)}
                    >
                      {order.id}{" "}
                    </li>
                  );
                })}{" "}
              </ul>
            )}
          </div>
          {order && (
            <Card>
              {" "}
              <CardHeader>
                <h4
                  style={{ color: "var(--primary)", fontSize: "1rem" }}
                  className="sub-h3"
                >
                  ID de Compra: <span>{order.id}</span>
                </h4>
              </CardHeader>
              <CartTable cart={order.cart} total={order.total} />
              <CardBody>
                <p>Datos de entrega</p>
                <ul>
                  <li className="d-flex justify-content-between">
                    <p>Dirección: </p>{" "}
                    <span>
                      {order.buyer.datos.street +
                        " " +
                        order.buyer.datos.number}
                    </span>
                  </li>
                  {order.buyer.datos.floor !== "" && (
                    <li className="d-flex justify-content-between">
                      <p>Piso: </p>
                      <span>{order.buyer.datos.floor}</span>{" "}
                    </li>
                  )}
                  {order.buyer.datos.dept !== "" && (
                    <li className="d-flex justify-content-between">
                      <p>Departamento: </p>
                      <span>{order.buyer.datos.dept}</span>{" "}
                    </li>
                  )}
                  <li className="d-flex justify-content-between">
                    <p> Numero de contacto: </p>
                    <span>{order.buyer.datos.phoneNumber}</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

export default Orders;
