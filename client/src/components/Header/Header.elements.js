import styled from "styled-components";

import logo from "../../assets/shared/desktop/logo.svg";

export const Container = styled.div`
  border: 1px dashed;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  background: url(${logo});
  height: 25px;
  width: 143px;
`;
