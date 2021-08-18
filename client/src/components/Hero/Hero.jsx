import React from "react";

import { Container } from "./Hero.elements";

export default function Hero() {
  return (
    <Container>
      <div className="wrapper">
        <div className="wrapper__inner">
          <p className="new-product">New product</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See product</button>
        </div>
      </div>
    </Container>
  );
}
