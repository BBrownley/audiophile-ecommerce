import React, { useState, useContext } from "react";
import { useCart, useCartUpdate } from "../../CartContext";

import {
  Container,
  CartIcon,
  Background,
  Main,
  Item
} from "./ShoppingCart.elements";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";

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
            return (
              <Item>
                <div className="item-main">
                  <img src={`${baseUrl}${item.image.url}`} />
                  <div>
                    <p className="item-main__name">{item.name}</p>
                    <p className="item-main__price">$ {item.price}</p>
                  </div>
                </div>
                <div className="item-quantity">
                  <button>-</button>
                  <div className="item-quantity__quantity">{item.quantity}</div>
                  <button>+</button>
                </div>
              </Item>
            );
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
