import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "reactstrap";

function CartTable({ cart, remover, total }) {
  return (
    <Table hover striped style={{ backgroundColor: "var(--white)" }}>
      <thead>
        <tr style={{ color: "var(--primary)" }}>
          <th>Kg.</th>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.count}</th>
              <th scope="row">{item.name} </th>
              <th>${item.price * item.count} </th>
              <th>
                <FontAwesomeIcon
                  style={{
                    color: "var(--secondary-dark)",
                    fontSize: "1.2  rem",
                  }}
                  onClick={() => {
                    remover(item.id);
                  }}
                  className="hover-pointer"
                  icon={faTrashAlt}
                />{" "}
              </th>
            </tr>
          );
        })}

        <tr style={{ color: "var(--primary)" }}>
          <th scope="row">TOTAL: </th>
          <th>${total()} </th>
        </tr>
      </tbody>
    </Table>
  );
}

export default CartTable;
