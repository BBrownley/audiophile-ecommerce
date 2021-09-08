import styled, { keyframes } from "styled-components";

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
  height: 20rem;
  width: 20rem;
  position: fixed;
  z-index: 2000;
  top: 7.5rem;
  right: 0rem;
  opacity: 0;
  background: white;
  border-radius: 0.5rem;
  &.fade-in-main {
    animation: ${fadeInMainLg} 0.35s ease-out forwards;
    @media (max-width: 1700px) {
      animation: ${fadeInMainReg} 0.35s ease-out forwards;
    }
  }
`;

export const MainWrapper = styled.div`
  position: absolute;
  max-width: 1600px;
  margin: 0 auto;
  left: 0;
  right: 0%;
  height: 1rem;
  width: 100%;
  border: 2px cyan;
`;
