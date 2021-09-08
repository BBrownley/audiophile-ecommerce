import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";

import Cart from "../Cart/Cart";
import NavLinks from "../NavLinks/NavLinks";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
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
  const [cartOpen, setCartOpen] = useState(true);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const toggleCartOpen = () => {
    setCartOpen(prevState => !prevState);
  };

  useEffect(() => {
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
            <ShoppingCartIcon
              toggleCartOpen={toggleCartOpen}
              cartOpen={cartOpen}
              handleClose={() => setCartOpen(false)}
            />
          </>
        )}

        {width <= 400 && (
          <MobileHeader>
            <HamburgerIcon onClick={toggleMobileMenu} />
            <Logo />
            <ShoppingCartIcon
              toggleCartOpen={toggleCartOpen}
              cartOpen={cartOpen}
              handleClose={() => setCartOpen(false)}
            />
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

      {cartOpen && (
        <Cart handleClose={() => setCartOpen(false)} cartOpen={cartOpen} />
      )}
    </Container>
  );
}
