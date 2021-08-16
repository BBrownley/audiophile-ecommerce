import React from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

import NavLinks from "../NavLinks/NavLinks";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import {
  Container,
  Logo,
  HeaderLeft,
  HamburgerIcon,
  MobileHeader
} from "./Header.elements";

export default function Header() {
  const width = useScreenWidth();

  return (
    <Container>
      {width > 400 && (
        <>
          <HeaderLeft>
            <HamburgerIcon />
            <Logo />
          </HeaderLeft>

          <NavLinks />
          <ShoppingCart />
        </>
      )}

      {width <= 400 && (
        <MobileHeader>
          <HamburgerIcon />
          <Logo />
          <ShoppingCart />
        </MobileHeader>
      )}
    </Container>
  );
}
