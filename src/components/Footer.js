import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer ">
      <Container>
        <Row xs="1" md="2">
          <Col>Nosotros</Col>
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
                  href="https://www.facebook.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "var(--light)",
                  }}
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </Col>
              <Col style={{ flexGrow: "0" }}>
                <a
                  href="https://www.instagram.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "var(--light)",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </Col>
              <Col style={{ flexGrow: "0" }}>
                <a
                  href="https://www.whatsapp.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    color: "var(--light)",
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faWhatsappSquare} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
