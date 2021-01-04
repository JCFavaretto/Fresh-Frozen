import ItemTable from "components/Admin/ItemTable";
import React from "react";
import { Jumbotron } from "reactstrap";

function ItemsAdmin() {
  return (
    <Jumbotron>
      <h3 className="separador">Productos Almacenados</h3>
      <ItemTable />
    </Jumbotron>
  );
}

export default ItemsAdmin;
