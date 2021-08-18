import React, { useState } from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

import NavLinks from "../NavLinks/NavLinks";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

import Logo from "../shared/Logo";

import {
  Container,
  HeaderLeft,
  HamburgerIcon,
  MobileHeader,
  MobileMenu
} from "./Header.elements";

export default function Header() {
  const width = useScreenWidth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <Container>
      <div className="wrapper">
        {width > 400 && (
          <>
            <HeaderLeft>
              <HamburgerIcon onClick={toggleMobileMenu} />
              <Logo />
            </HeaderLeft>

            <NavLinks />
            <ShoppingCart />
          </>
        )}

        {width <= 400 && (
          <MobileHeader>
            <HamburgerIcon onClick={toggleMobileMenu} />
            <Logo />
            <ShoppingCart />
          </MobileHeader>
        )}
      </div>

      <MobileMenu open={mobileMenuOpen}>
        <CategoryNavigation className="mobile-menu-nav" />
      </MobileMenu>
      <div
        className={`close-menu ${!mobileMenuOpen && "closed"}`}
        onClick={closeMobileMenu}
      ></div>
    </Container>
  );
}
