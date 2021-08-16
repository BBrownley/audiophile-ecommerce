import styled from "styled-components";

import cart from "../../assets/shared/desktop/icon-cart.svg";

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
`;
