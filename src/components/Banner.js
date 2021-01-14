import { useGetFirestore } from "hooks/useGetFirestore";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { Col, Row, Spinner } from "reactstrap";

function Banner() {
  const { productos, loading } = useGetFirestore("banners");
  const bannerOfi = {
    path: "/nosotros",
    name: "logo",
    alt: "Fresh&Frozen",
    storage:
      "https://firebasestorage.googleapis.com/v0/b/fresh-and-frozen-c300d.appspot.com/o/banners%2Flogo.jpg?alt=media&token=db4836c8-dea9-4aa6-9b8b-038bd6c5d164",
  };

  let todosLosBanners;
  if (!loading && Array.isArray(productos)) {
    todosLosBanners = [bannerOfi, ...productos];
  }

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
        todosLosBanners.map((banner) => {
          return (
            <Link key={banner.id} to={banner.path}>
              <img
                src={banner.storage}
                alt={banner.alt}
                width="100%"
                height="300px"
                style={{ position: "relative" }}
              />
            </Link>
          );
        })
      )}
    </Carousel>
  );
}

export default Banner;
