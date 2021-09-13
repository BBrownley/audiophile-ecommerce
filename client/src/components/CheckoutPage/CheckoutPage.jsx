import React from "react";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

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
        <CheckoutForm />
        <CheckoutSummary />
      </Main>
    </Container>
  );
}
