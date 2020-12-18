import { useGetFirestore } from "hooks/useGetFirestore";
import React, { useState, useEffect } from "react";
import { Alert, Input, Jumbotron, Spinner, Table } from "reactstrap";
import { db } from "fire";

function AdminTable() {
  const { loading, productos } = useGetFirestore("", "users");
  const [users, setUsers] = useState(productos);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setUsers(productos);
  }, [productos]);

  function handleEdit(e, data, id) {
    const user = {
      Email: data.Email,
      date: data.date,
      isAuthorized: e.target.checked,
    };
    console.log(id);
    db.collection("users")
      .doc(id)
      .update(user)
      .then(() => {
        console.log("Usuario Actualizado");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      });
  }

  return (
    <Jumbotron style={{ minHeight: "70vh" }}>
      <h3 className="separador">Administradores Registrados</h3>
      <Table>
        <thead>
          <tr>
            <th>E-mail</th>
            <th>Fecha</th>
            <th>Autorizado</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <th>
                <Spinner type="grow" color="primary" />
              </th>
            </tr>
          ) : (
            Array.isArray(users) &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.Email} </th>
                  <th>
                    {new Date(user.date.seconds * 1000).toLocaleDateString(
                      "es-MX"
                    )}
                  </th>
                  <th>
                    <Input
                      type="checkbox"
                      name="onSale"
                      defaultChecked={user.isAuthorized}
                      onChange={(e) => handleEdit(e, user, user.id)}
                    />
                  </th>
                  <th>
                    <Alert
                      style={{
                        position: "fixed",
                        top: "1rem",
                        right: "1rem",
                        zIndex: "1030",
                      }}
                      color="info"
                      isOpen={alert}
                      toggle={() => setAlert(false)}
                    >
                      Usuario actualizado.
                    </Alert>
                  </th>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Jumbotron>
  );
}

export default AdminTable;
