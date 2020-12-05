import Banner from "components/Banner";
import ItemCarousel from "components/ItemCarousel";
import React from "react";
import { Container } from "reactstrap";

function Home() {
  return (
    <div className="jumbotron">
      <Banner />
      <Container
        style={{
          borderTop: "1px solid var(--secondary)",
          marginTop: "1rem",
          paddingTop: "1rem",
        }}
      >
        <h3>Nuestros destacados</h3>
        <ItemCarousel />
      </Container>
    </div>
  );
}

export default Home;
