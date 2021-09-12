import React from "react";

import {
  Container,
  HeaderBkg,
  GoBack,
  Main,
  PaymentInfo,
  Summary
} from "./CheckoutPage.elements";

export default function CheckoutPage() {
  return (
    <Container>
      <HeaderBkg />
      <GoBack>Go Back</GoBack>
      <Main>
        <PaymentInfo>
          <h3>Checkout</h3>
        </PaymentInfo>
        <Summary></Summary>
      </Main>
    </Container>
  );
}
