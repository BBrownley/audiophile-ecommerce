import React from "react";

import { Container, CartIcon } from "./ShoppingCartIcon.elements";

import { Background, MainWrapper, Main } from "../Cart/Cart.elements";

export default function ShoppingCartIcon({
  toggleCartOpen,
  cartOpen,
  handleClose
}) {
  return (
    <Container>
      <CartIcon onClick={toggleCartOpen}> </CartIcon>
      <Background
        onClick={handleClose}
        className={cartOpen ? "fade-in-bkg" : ""}
      ></Background>
      <MainWrapper>
        <Main
          onClick={e => e.stopPropagation()}
          className={cartOpen ? "fade-in-main" : ""}
        ></Main>
      </MainWrapper>
    </Container>
  );
}
