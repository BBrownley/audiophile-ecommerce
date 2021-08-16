import React from "react";
import styled from "styled-components";

import logo from "../../assets/shared/desktop/logo.svg";

const LogoEl = styled.div`
  background: url(${logo});
  height: 25px;
  width: 143px;
`;

export default function Logo() {
  return <LogoEl />;
}
