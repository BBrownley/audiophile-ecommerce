import React, { useState } from "react";
import { useForm } from "react-hook-form";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

import {
  Container,
  HeaderBkg,
  GoBack,
  Main,
  PaymentInfo,
  Summary
} from "./CheckoutPage.elements";

export default function CheckoutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    setCheckoutComplete(true);
  };

  const [checkoutComplete, setCheckoutComplete] = useState(true);

  return (
    <Container>
      <HeaderBkg />
      <GoBack>Go Back</GoBack>
      <Main>
        <CheckoutForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <CheckoutSummary submitForm={onSubmit} />
      </Main>
      {checkoutComplete && (
        <CheckoutModal setCheckoutComplete={setCheckoutComplete} />
      )}
    </Container>
  );
}
