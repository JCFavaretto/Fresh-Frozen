import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
} from "reactstrap";
import { fb, db } from "fire";
import { useHistory } from "react-router-dom";

const LoginAdmin = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [sec, setSec] = useState(false);
  const [reg, setReg] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [correct, setCorrect] = useState(false);
  const history = useHistory();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (reg) {
        fb.auth()
          .createUserWithEmailAndPassword(mail, password)
          .then((cred) => {
            db.collection("users").doc(cred.user.uid).set({
              isAuthorized: false,
              Email: mail,
            });
          })
          .then(() => {
            setSuccess("Usuario Creado");
          })
          .then(() => {
            setSuccess("");
            history.push("/admin");
          })
          .catch((err) => {
            setError(() => err.message);
          });
      } else {
        fb.auth()
          .signInWithEmailAndPassword(mail, password)
          .then(({ user }) => {
            console.log(user);
            setSuccess("Iniciando Sesión");
          })
          .then(() => {
            setSuccess("");
            history.push("/admin");
          })
          .catch((err) => {
            setError(() => err.message);
          });
      }
    }
  };

  const inputMail = (e) => {
    setMail(e.target.value);
    setError(() => "");
  };

  const inputPass = (e) => {
    setPassword(e.target.value);
    setError(() => "");
  };

  const confirmPass = (e) => {
    if (e.target.value !== password) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  };

  const confirm = (e) => {
    if (e.target.value === "12345678") {
      setCorrect(true);
    } else setCorrect(false);
  };

  const handleSecSubmit = (e) => {
    e.preventDefault();
    setCorrect(false);
    setReg(true);
    setSec(false);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        paddingTop: "2rem",
      }}
    >
      <Container>
        <Jumbotron>
          {sec ? (
            <h1>Ingrese codigo de registro</h1>
          ) : (
            <h1>{reg ? "Registro de Usuario" : "Inicio de Sesion"}</h1>
          )}
          {sec ? (
            <Form onSubmit={handleSecSubmit}>
              <FormGroup>
                {" "}
                <Input
                  type="password"
                  placeholder="Codigo"
                  onChange={confirm}
                />
              </FormGroup>
              <Button disabled={!correct}>Comprobar</Button>
            </Form>
          ) : (
            <Form onSubmit={handleAuthSubmit}>
              <FormGroup>
                <Input
                  type="mail"
                  onChange={inputMail}
                  placeholder="E-mail"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  onChange={inputPass}
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
              )}
              <p style={{ color: "var(--danger)" }}>{error}</p>
              <p style={{ color: "var(--success)" }}>{success} </p>
              <Button color="primary">Ingresar</Button>
            </Form>
          )}
          {sec ? (
            <p className="reg mt-2" onClick={() => setSec(false)}>
              Ya tengo cuenta
            </p>
          ) : !reg ? (
            <p className="reg mt-2" onClick={() => setSec((prev) => !prev)}>
              Registrar admin nuevo
            </p>
          ) : (
            <p className="reg mt-2" onClick={() => setReg(false)}>
              Ya tengo cuenta
            </p>
          )}
        </Jumbotron>
      </Container>
    </div>
  );
};

export default LoginAdmin;
