import { useGetFirestore } from "hooks/useGetFirestore";
import React, { useState, useEffect } from "react";
import { Alert, Button, Jumbotron, Spinner, Table } from "reactstrap";
import { db } from "fire";

function AdminTable() {
  const { loading, productos } = useGetFirestore("", "users");
  const [users, setUsers] = useState(productos);
  const [alert, setAlert] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setUsers(productos);
  }, [productos]);

  function handleEdit(data, id) {
    setLoad(true);
    let role;
    if (data.role === "user") {
      role = "admin";
    } else {
      role = "user";
    }
    const user = {
      Email: data.Email,
      date: data.date,
      role,
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
        setLoad(false);
        setAlert(true);
        setTimeout(() => {
          window.location.reload();
          setAlert(false);
        }, 500);
      });
  }

  return (
    <Jumbotron style={{ minHeight: "70vh" }}>
      <h3 className="separador">Usuarios Registrados</h3>
      <Table>
        <thead>
          <tr>
            <th>E-mail</th>
            <th>Fecha</th>
            <th>Rol</th>
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
                    {user.role}{" "}
                    <Button
                      style={{ minWidth: "100px" }}
                      color="secondary"
                      onClick={() => handleEdit(user, user.id)}
                    >
                      Cambiar
                    </Button>
                  </th>
                  <th>
                    {load && (
                      <Spinner
                        style={{
                          position: "fixed",
                          top: "1rem",
                          right: "2rem",
                          zIndex: "2000",
                          width: "4rem",
                          height: "4rem",
                        }}
                        type="grow"
                        color="primary"
                      />
                    )}

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
