import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    console.log(location.pathname);
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
