import React from "react";

import NavLinks from "../NavLinks/NavLinks";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import { Container, Logo } from "./Header.elements";

export default function Header() {
  return (
    <Container>
      <Logo />
      <NavLinks />
      <ShoppingCart />
    </Container>
  );
}
