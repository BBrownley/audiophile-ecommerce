import React from "react";

import { Container, Category } from "./CategoryNavigation.elements";

export default function CategoryNavigation({ className }) {
  return (
    <Container className={className}>
      <div className="wrapper">
        <div className="category-nav__item">
          <div className="category-nav__item__img headphones"></div>
          <h6>Headphones</h6>
          <button className="tertiary">Shop</button>
        </div>
        <div className="category-nav__item">
          <div className="category-nav__item__img speakers"></div>
          <h6>Speakers</h6>
          <button className="tertiary">Shop</button>
        </div>
        <div className="category-nav__item">
          <div className="category-nav__item__img earphones"></div>
          <h6>Earphones</h6>
          <button className="tertiary">Shop</button>
        </div>
      </div>
    </Container>
  );
}
