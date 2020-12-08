import React from "react";
import { items } from "assets/items";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Item from "components/Item";
import { Row, Col } from "reactstrap";
import useWindowDimensions from "hooks/useWindowDimensions";

const ItemCarousel = () => {
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
    <CarouselProvider
      className="item-carousel"
      naturalSlideWidth={1}
      naturalSlideHeight={calculateHeight()}
      totalSlides={items.length + 1}
      visibleSlides={calculateSlides()}
      infinite={true}
      isPlaying={true}
      interval={2500}
    >
      <Slider>
        {items.map((item) => {
          return (
            <Slide
              index={item.id}
              key={item.id}
              style={{ marginRight: "10px" }}
            >
              <Item
                id={item.id}
                title={item.nombre}
                img={item.img}
                alt={item.alt}
                precio={item.precio}
                stock={item.stock}
              />
            </Slide>
          );
        })}
      </Slider>
      <Row style={calculateSlides() === 1 ? { display: "none" } : {}}>
        <Col xs="2">
          <ButtonBack className="btn btn-secondary">Back</ButtonBack>
        </Col>
        <Col xs="8"></Col>
        <Col xs="2">
          <ButtonNext className="btn btn-secondary">Next</ButtonNext>
        </Col>
      </Row>
    </CarouselProvider>
  );
};

export default ItemCarousel;
