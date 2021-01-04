import React from "react";
import { useGetFirestore } from "hooks/useGetFirestore";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Item from "components/Item";
import { Row, Col, Spinner } from "reactstrap";
import useWindowDimensions from "hooks/useWindowDimensions";

const ItemCarousel = () => {
  const { loading, productos } = useGetFirestore();

  const { width } = useWindowDimensions();

  const calculateSlides = () => {
    if (width > 992) {
      return 4;
    } else if (width > 768) {
      return 3;
    } else if (width > 468) {
      return 2;
    } else {
      return 1;
    }
  };

  const calculateHeight = () => {
    if (width < 468) {
      return 1.3;
    } else {
      return 2;
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner
          style={{ margin: "0 auto", width: "4rem", height: "4rem" }}
          type="grow"
          color="secondary"
        />
      ) : (
        <CarouselProvider
          className="item-carousel"
          naturalSlideWidth={1}
          naturalSlideHeight={calculateHeight()}
          totalSlides={productos.length + 1}
          visibleSlides={calculateSlides()}
          infinite={true}
          isPlaying={true}
          interval={2500}
        >
          <Slider>
            {Array.isArray(productos) &&
              productos.map((item) => {
                return (
                  <Slide
                    index={item.id}
                    key={item.id}
                    style={{ marginRight: "10px" }}
                  >
                    <Item
                      id={item.id}
                      name={item.name}
                      img={item.img}
                      alt={item.alt}
                      price={item.price}
                      stock={item.stock}
                    />
                  </Slide>
                );
              })}
          </Slider>
          <Row style={calculateSlides() === 1 ? { display: "none" } : {}}>
            <Col xs="2">
              <ButtonBack className="btn btn-secondary">Anterior</ButtonBack>
            </Col>
            <Col xs="8"></Col>
            <Col xs="2">
              <ButtonNext className="btn btn-secondary">Siguiente</ButtonNext>
            </Col>
          </Row>
        </CarouselProvider>
      )}
    </div>
  );
};

export default ItemCarousel;
