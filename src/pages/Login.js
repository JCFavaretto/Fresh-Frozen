import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { fb, db } from "fire";

import { useHistory } from "react-router-dom";
import GoogleSignIn from "components/GoogleSignIn";

const Login = () => {
  const [reg, setReg] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    Email: "",
    pass: "",
  });

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (reg) {
        fb.auth()
          .createUserWithEmailAndPassword(user.Email, user.pass)
          .then((cred) => {
            db.collection("users")
              .doc(cred.user.uid)
              .set({
                name: user.name,
                Email: user.Email,
                date: new Date(),
                role: "user",
                wishlist: [],
                orders: [],
                phoneNumber: "",
                address: {
                  street: "",
                  number: "",
                  dept: "",
                  floor: "",
                },
              });
          })
          .then(() => {
            setSuccess("Usuario Creado");
          })
          .then(() => {
            setSuccess("");
          })
          .catch((err) => {
            setError(() => err.message);
          })
          .finally(() => {
            history.push("/");
          });
      } else {
        fb.auth()
          .signInWithEmailAndPassword(user.Email, user.pass)
          .then(() => {
            setSuccess("Iniciando Sesión");
          })
          .then(() => {
            setSuccess("");
          })
          .catch((err) => {
            setError(() => err.message);
          })
          .finally(() => {
            history.push("/");
          });
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const confirmPass = (e) => {
    if (e.target.value !== user.pass) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  };

  const loginOrSign = () => {
    setReg((prev) => !prev);
    setError("");
  };

  return (
    <Container>
      <h1 className="sub-h3 separador">
        {reg ? "Registro de Usuario" : "Inicio de Sesion"}
      </h1>

      <Form
        onSubmit={handleAuthSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {reg && (
          <FormGroup>
            <Input
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Nombre"
              required
            />
          </FormGroup>
        )}
        <FormGroup>
          <Input
            type="mail"
            name="Email"
            onChange={handleInput}
            placeholder="E-mail"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="pass"
            onChange={handleInput}
            placeholder="Contraseña"
            required
          />
        </FormGroup>
        {reg && (
          <FormGroup>
            <Input
              type="text"
              onChange={confirmPass}
              placeholder="Confirme contraseña"
              required
            />
          </FormGroup>
        )}{" "}
        {!reg ? (
          <p className="reg mt-2 sub-h3" onClick={loginOrSign}>
            Registrar usuario nuevo
          </p>
        ) : (
          <p className="reg mt-2 sub-h3" onClick={loginOrSign}>
            Ya tengo cuenta
          </p>
        )}
        <p style={{ color: "var(--danger)" }}>{error}</p>
        <p style={{ color: "var(--success)" }}>{success} </p>
        <Button style={{ margin: "0 auto" }} color="primary">
          {reg ? "Registrar" : "Ingresar"}
        </Button>
      </Form>

      <GoogleSignIn />
    </Container>
  );
};

export default Login;
