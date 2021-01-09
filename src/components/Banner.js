import { useGetFirestore } from "hooks/useGetFirestore";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { Col, Row, Spinner } from "reactstrap";

function Banner() {
  const { productos, loading } = useGetFirestore("", "banners");

  return (
    <Carousel
      renderArrow={() => <></>}
      itemsToShow={1}
      enableSwipe
      enableMouseSwipe
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <Row>
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <Col
                  style={{ padding: "0" }}
                  key={page}
                  onClick={() => onClick(page)}
                  active={isActivePage}
                >
                  <div
                    className={
                      isActivePage
                        ? "pagination-banner banner-active"
                        : "pagination-banner"
                    }
                  ></div>
                </Col>
              );
            })}
          </Row>
        );
      }}
    >
      {loading ? (
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
          <Spinner
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              margin: "auto",
              width: "5rem",
              height: "5rem",
            }}
            type="grow"
            color="secondary"
          />{" "}
        </div>
      ) : (
        Array.isArray(productos) &&
        productos.map((banner) => {
          return (
            <Link key={banner.id} to={banner.path}>
              <img
                src={banner.storage}
                alt={banner.alt}
                width="100%"
                height="300px"
              />
            </Link>
          );
        })
      )}
    </Carousel>
  );
}

export default Banner;
