import styled from "styled-components";

import logo from "../../assets/shared/desktop/logo.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";

export const Container = styled.div`
  border: 1px dashed;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  @media (max-width: 800px) {
    padding: 2rem 2.5rem;
  }
  @media (max-width: 400px) {
    padding: 1.5rem;
  }
  @media (max-width: 305px) {
    padding: 1rem 0.5rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled.div`
  background: url(${hamburger});
  height: 15px;
  width: 16px;
  margin-right: 2.5rem;
  display: none;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
