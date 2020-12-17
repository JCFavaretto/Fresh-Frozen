import React from "react";
import { useGetFirestore } from "hooks/useGetFirestore";
import { Button, Spinner, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { db, storage } from "fire";

function ItemTable() {
  const { loading, productos } = useGetFirestore();

  function handleDelete(name, id) {
    if (window.confirm("Confime para eliminar producto")) {
      storage
        .ref()
        .child(`images/${name}`)
        .delete()
        .then(() => {
          db.collection("items")
            .doc(id)
            .delete()
            .then(() => {
              console.log("Articulo eliminado");
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <Spinner type="grow" color="primary" />
        ) : (
          Array.isArray(productos) &&
          productos.map((item) => {
            return (
              <>
                <tr key={item.id}>
                  <th scope="row">{item.name} </th>
                  <th>{item.price} </th>
                  <th>{item.stock}</th>
                  <th>
                    <Link to={`/admin/items/${item.id}`}>
                      <Button
                        style={{ minWidth: "94px" }}
                        className="mb-1"
                        color="danger"
                      >
                        Editar
                      </Button>
                    </Link>{" "}
                    <Button
                      style={{ minWidth: "94px" }}
                      className="mb-1"
                      onClick={() => handleDelete(item.name, item.id)}
                    >
                      Eliminar
                    </Button>
                  </th>
                </tr>
              </>
            );
          })
        )}
      </tbody>
    </Table>
  );
}

export default ItemTable;
