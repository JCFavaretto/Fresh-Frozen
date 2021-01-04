import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Link to="/contact">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/fresh-and-frozen-c300d.appspot.com/o/banners%2Flogo.jpg?alt=media&token=db4836c8-dea9-4aa6-9b8b-038bd6c5d164"
        alt="Fresh&Frozen"
        width="100%"
        height="300px"
      />
    </Link>
  );
}

export default Banner;
