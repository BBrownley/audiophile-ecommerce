import React, { useState, useContext } from "react";
import { useCart } from "../../CartContext";

import { Container, CartIcon, Background, Main } from "./ShoppingCart.elements";

export default function ShoppingCart({
  toggleCartOpen,
  cartOpen,
  handleClose
}) {
  const items = useCart();

  const removeAllItems = () => {};
  const increaseItemQuantity = () => {};

  console.log(items);

  return (
    <Container>
      <CartIcon onClick={toggleCartOpen}> </CartIcon>
      <Background
        onClick={handleClose}
        className={cartOpen ? "fade-in-bkg" : ""}
      ></Background>

      <Main
        onClick={e => e.stopPropagation()}
        className={cartOpen ? "fade-in-main" : ""}
      >
        <div className="cart-header">
          <h6>Cart (3)</h6>
          <span className="remove-all">Remove all</span>
        </div>
        <div className="cart-items"></div>
        <div className="cart-total">
          <span>Total</span>
          <span>
            <strong>$5,376</strong>
          </span>
        </div>
        <button>Checkout</button>
      </Main>
    </Container>
  );
}
