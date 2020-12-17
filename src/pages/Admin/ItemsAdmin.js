import ItemTable from "components/Admin/ItemTable";
import React from "react";
import { Jumbotron } from "reactstrap";

function ItemsAdmin() {
  return (
    <Jumbotron>
      <h1>Productos Almacenados</h1>
      <ItemTable />
    </Jumbotron>
  );
}

export default ItemsAdmin;
