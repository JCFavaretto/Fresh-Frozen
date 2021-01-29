import React from "react";

import { Col, Container, Row } from "reactstrap";
import facebook from "assets/facebook.svg";
import instagram from "assets/instagram.svg";
import whatsapp from "assets/whatsapp.svg";

const Footer = () => {
  return (
    <div className="footer ">
      <Container>
        <Row xs="1">
          <Col>
            Nuestras Redes Sociales
            <Row
              style={{
                color: "var(--light)",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              <Col style={{ flexGrow: "0" }}>
                <a
                  href="https://www.facebook.com/freshandfrozen.pescaderia"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "var(--light)",
                  }}
                >
                  <img src={facebook} width="35px" alt="F" />
                </a>
              </Col>
              <Col style={{ flexGrow: "0" }}>
                <a
                  href="https://www.instagram.com/freshandfrozen.pescaderia"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "var(--light)",
                  }}
                >
                  <img src={instagram} width="35px" alt="F" />
                </a>
              </Col>
              <Col style={{ flexGrow: "0" }}>
                <a
                  href="https://api.whatsapp.com/send?phone=542234220714&text=Buenas! Quisiera conocer mas sobre los productos que ofreces"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <img src={whatsapp} width="35px" alt="F" />
                </a>
              </Col>
            </Row>
          </Col>
          <Col>
            <p style={{ marginTop: "1rem", fontSize: "0.6rem" }}>
              Copyright Fresh&Frozen - {new Date().getFullYear()}. Todos los
              derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
