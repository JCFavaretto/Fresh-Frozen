import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Link to="/contact">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/fresh-and-frozen-c300d.appspot.com/o/logo.jpg?alt=media&token=33600912-465f-4cc3-85fe-4fa4a7818367"
        alt="Fresh&Frozen"
        width="100%"
        height="300px"
      />
    </Link>
  );
}

export default Banner;
