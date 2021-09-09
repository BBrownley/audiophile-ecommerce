import React, { useState, useContext } from "react";
import { useCart, useCartUpdate } from "../../CartContext";

import { Container, CartIcon, Background, Main } from "./ShoppingCart.elements";

export default function ShoppingCart({
  toggleCartOpen,
  cartOpen,
  handleClose
}) {
  const items = useCart();
  const updateCart = useCartUpdate();

  const removeAllItems = () => {
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const increaseItemQuantity = () => {};

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
          <h6>Cart ({items.length})</h6>
          <span className="remove-all" onClick={removeAllItems}>
            Remove all
          </span>
        </div>
        <div className="cart-items">
          {items.map(item => {
            return <p>{item.name}</p>;
          })}
        </div>
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
