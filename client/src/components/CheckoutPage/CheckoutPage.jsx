import React from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

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
    </Container>
  );
}
