import Banner from "components/Banner";
import ItemCarousel from "components/ItemCarousel";
import React from "react";
import { Container } from "reactstrap";

function Home() {
  return (
    <div>
      <Banner />
      <Container
        style={{
          borderTop: "1px solid var(--secondary)",
          marginTop: "1rem",
          paddingTop: "1rem",
        }}
      >
        <h3 className="sub-h3">Productos Mas Vendidos</h3>
        <ItemCarousel />
      </Container>
    </div>
  );
}

export default Home;
