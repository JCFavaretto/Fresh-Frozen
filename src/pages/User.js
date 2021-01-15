import AuthContext from "context/AuthContext";
import React, { useContext } from "react";

function User() {
  const [{ user }] = useContext(AuthContext);
  return (
    <div>
      <h3 className="sub-h3 separador">Mis Datos</h3>
      {user.date && (
        <div style={{ color: "white" }}>
          <p>Nombre: {user.name} </p>
          <p>Email: {user.Email} </p>
          <p>
            Fecha de registro:{"   "}
            {user.date.toDate().getDate() +
              "/" +
              (user.date.toDate().getMonth() + 1) +
              "/" +
              user.date.toDate().getFullYear()}{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default User;
