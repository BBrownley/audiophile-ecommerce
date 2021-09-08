import styled, { keyframes } from "styled-components";

import cart from "../../assets/shared/desktop/icon-cart.svg";

const fadeInBkg = keyframes`
  0% {
    opacity: .05;
  }

  100% {
    opacity: .5;
  }
`;

const fadeInMainLg = keyframes`
  0% {
    right: 50%;
    transform: translateX(56.5rem);
    opacity: 0;
  }

  70% {
    right: 50%;
    transform: translateX(49.5rem);
    opacity: .9;
  }

  100% {
    right: 50%;
    transform: translateX(50rem);
    opacity: 1;
  }
`;

const fadeInMainReg = keyframes`
  0% {
    right: -3rem;
    opacity: 0;
  }

  70% {
    right: 3rem;
    opacity: .9;
  }

  100% {
    right: 2.5rem;
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin-left: 120px;
  @media (max-width: 1050px) {
    margin-left: 4rem;
  }
  @media (max-width: 925px) {
    margin-left: 2rem;
  }
`;

export const CartIcon = styled.div`
  background: url(${cart});
  height: 20px;
  width: 23px;
  &:hover {
    cursor: pointer;
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0rem;
  left: -2.5rem;
  right: -2.5rem;
  height: 100vh;
  background-color: black;
  z-index: 1000;
  display: none;
  transition: all 1s;

  &.fade-in-bkg {
    display: block;
    animation: ${fadeInBkg} 0.35s ease forwards;
  }
`;
export const Main = styled.div`
  position: fixed;
  z-index: 2000;
  top: 7.5rem;
  right: 0rem;
  opacity: 0;
  background: white;
  border-radius: 0.5rem;

  padding: 2rem;
  width: 19.5rem;

  display: none;
  flex-direction: column;

  > * {
    margin-bottom: 2rem;
  }

  h6,
  p {
    margin: 0;
  }

  button {
    width: auto;
    margin-bottom: 0;
  }

  &.fade-in-main {
    display: flex;
    animation: ${fadeInMainLg} 0.35s ease-out forwards;
    @media (max-width: 1700px) {
      animation: ${fadeInMainReg} 0.35s ease-out forwards;
    }
  }

  .cart-header,
  .cart-total {
    display: flex;
    justify-content: space-between;
  }

  .cart-header {
    .remove-all {
      text-decoration: underline;
      color: #909090;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
