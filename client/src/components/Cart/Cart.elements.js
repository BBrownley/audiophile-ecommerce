import styled, { keyframes } from "styled-components";

const fadeInBkg = keyframes`
  0% {
    opacity: .05;
  }

  100% {
    opacity: .5;
  }
`;

const fadeInMain = keyframes`
  0% {
    right: -10rem;
    opacity: 0;
  }

  100% {
    right: 0rem;
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
  position: absolute;
  z-index: 2000;
  top: 4rem;
  right: 0;
  opacity: 0;
  background: white;
  border-radius: 0.5rem;
  &.fade-in-main {
    animation: ${fadeInMain} 0.35s ease forwards;
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
