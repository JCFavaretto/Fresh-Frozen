import { useGetFirestore } from "hooks/useGetFirestore";
import React, { useState } from "react";
import { Alert, Col, Jumbotron, Row, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddBanner from "components/Admin/AddBanner";
import { storage, db } from "fire";
import { useHistory } from "react-router-dom";

function BannersAdmin() {
  const { loading, productos } = useGetFirestore("banners");

  const history = useHistory();

  const [loading2, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);

  function toogle() {
    setModal((prev) => !prev);
  }

  function addBanner(banner) {
    console.log(banner);
    const uploadTask = storage
      .ref(`banners/${banner.name}`)
      .put(banner.storage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("banners")
          .child(banner.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("banners").doc().set({
              name: banner.name,
              alt: banner.alt,
              storage: url,
              path: banner.path,
            });
          })
          .then(setModal(false))
          .then(setLoading(false))
          .then(setAlert(true))
          .then(
            setTimeout(() => {
              history.push("/admin/banners");
            }, 2000)
          )
          .catch((err) => {
            console.log(err);
          });
      }
    );
  }

  return (
    <Jumbotron style={{ minHeight: "70hv", backgroundColor: "#f3f3f3" }}>
      <Alert
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: "1030",
        }}
        isOpen={alert}
        toggle={() => setAlert(false)}
        color="primary"
        fade
      >
        Banner Guardado
      </Alert>
      {loading2 && (
        <Spinner
          style={{
            position: "fixed",
            top: "1rem",
            right: "3rem",
            zIndex: "22200",
            width: "3rem",
            height: "3rem",
          }}
          type="grow"
          color="primary"
        />
      )}
      <h3 className="separador">Banners almacenados</h3>
      <Row xs="1" sm="2" lg="3" xl="4">
        <Col>
          <div
            style={{
              margin: "0",
              padding: "0",
              width: "250px",
            }}
            className="banner-add mb-2"
            onClick={toogle}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
          </div>
          <AddBanner addBanner={addBanner} modal={modal} toggleModal={toogle} />
        </Col>
        {loading ? (
          <Col style={{ position: "relative" }}>
            <Spinner
              style={{
                position: "absolute",
                top: "40%",
                left: "40%",
                width: "3rem",
                height: "3rem",
              }}
              type="grow"
              color="primary"
            />
          </Col>
        ) : (
          Array.isArray(productos) &&
          productos.map((banner) => {
            return (
              <Col key={banner.id} className="mb-2">
                <img
                  height="150px"
                  width="250px"
                  src={banner.storage}
                  alt={banner.alt}
                />
              </Col>
            );
          })
        )}
      </Row>{" "}
    </Jumbotron>
  );
}

export default BannersAdmin;
