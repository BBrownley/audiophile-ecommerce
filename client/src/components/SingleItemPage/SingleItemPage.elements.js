import styled from "styled-components";

export const Container = styled.div`
  .header-bkg {
    background: black;
    height: 5.5rem;
    margin-left: -100vw;
    margin-right: -100vw;
    margin-top: -5.5rem;
  }
  @media (max-width: 800px) {
    .header-bkg {
      height: 5.625rem;
    }
  }
`;
export const GoBack = styled.div`
  margin-top: 5rem;
  color: #7d7d7d;
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 4rem;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 725px) {
    margin-top: 1.5rem;
  }
`;
export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 725px) {
    flex-direction: column;
  }
`;
export const ProductImg = styled.img`
  height: auto;
  width: 50%;
  max-width: 540px;
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 725px) {
    width: 100%;
  }
`;
export const ProductDetails = styled.div`
  padding-left: 5.5rem;
  max-width: 80ch;
  h2 {
    margin-top: 0;
  }
  p:last-of-type {
    margin-bottom: 0%;
  }

  @media (max-width: 1100px) {
    padding-left: 4.5rem;
  }
  @media (max-width: 725px) {
    padding-left: 0;
    margin-top: 3rem;
  }
`;
export const Features = styled.div``;
export const IncludedItems = styled.div``;
export const Quantity = styled.div`
  display: flex;
  margin-top: 3rem;
`;
export const Counter = styled.div`
  display: flex;
  height: 3rem;
  margin-right: 1rem;
  > * {
    background: ${props => props.theme.colors.white500};
    line-height: 3rem;
  }
  button {
    color: #c4c4c4;
    width: auto;
    padding: 0 1.25rem;
    &:hover {
      background-color: ${props => props.theme.colors.white500};
      color: ${props => props.theme.colors.primary};
      transition: 0.25s;
    }
  }
  .amount {
    font-size: 0.8125rem;
    font-weight: bold;
    min-width: 1.5rem;
    text-align: center;
    &:hover {
      cursor: default;
      user-select: none;
    }
  }
`;
