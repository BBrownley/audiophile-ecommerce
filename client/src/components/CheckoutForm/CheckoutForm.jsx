import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Container, FormSection, Field } from "./CheckoutForm.elements";

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [paymentMethod, setPaymentMethod] = useState("e-money");

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <p className="section-label">Billing details</p>
          <div className="fields">
            <Field>
              <label for="name">
                <div className="field-header">
                  <p className="form-label">Name</p>
                </div>
              </label>
              <input name="name" {...register("name")} />
            </Field>
            <Field>
              <label for="email">
                <div className="field-header">
                  <p className="form-label">Email Address</p>
                </div>
              </label>
              <input name="email" {...register("email")} />
            </Field>
            <Field>
              <label for="phoneNumber">
                <div className="field-header">
                  <p className="form-label">Phone Number</p>
                  {errors.phoneNumber && (
                    <p className="form-error">Invalid format.</p>
                  )}
                </div>
              </label>
              <input
                name="phoneNumber"
                {...register("phoneNumber", {
                  pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
                })}
              />
            </Field>
          </div>
        </FormSection>
        <FormSection>
          <p className="section-label">Shipping info</p>
          <div className="fields">
            <Field fullwidth>
              <label for="address">
                <div className="field-header">
                  <p className="form-label">Address</p>
                </div>
              </label>
              <input name="address" {...register("address")} />
            </Field>
            <Field>
              <label for="zipcode">
                <div className="field-header">
                  <p className="form-label">ZIP code</p>
                </div>
              </label>
              <input
                name="zipcode"
                {...register("zipcode", {
                  pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/
                })}
              />
            </Field>
            <Field>
              <label for="city">
                <div className="field-header">
                  <p className="form-label">City</p>
                </div>
              </label>
              <input name="city" {...register("city")} />
            </Field>
            <Field>
              <label for="country">
                <div className="field-header">
                  <p className="form-label">Country</p>
                </div>
              </label>
              <input name="country" {...register("country")} />
            </Field>
          </div>
        </FormSection>
        <FormSection>
          <p className="section-label">Payment details</p>

          <Field paymentDetails>
            <label for="paymentMethod">
              <div className="field-header">
                <p className="form-label">Payment method</p>
              </div>
            </label>
            <div className="payment-methods">
              <button
                className={paymentMethod === "e-money" ? "selected" : ""}
                onClick={() => setPaymentMethod("e-money")}
              >
                <div className="radio-circle"></div>
                <span>e-Money</span>
              </button>
              <button
                className={paymentMethod === "cash" ? "selected" : ""}
                onClick={() => setPaymentMethod("cash")}
              >
                <div className="radio-circle"></div>
                <span>Cash on Delivery</span>
              </button>
            </div>
          </Field>

          {paymentMethod === "e-money" && (
            <div className="e-money-form">
              <Field>
                <label for="eMoneyNumber">
                  <div className="field-header">
                    <p className="form-label">e-Money Number</p>
                  </div>
                </label>
                <input name="eMoneyNumber" {...register("eMoneyNumber")} />
              </Field>
              <Field>
                <label for="eMoneyPin">
                  <div className="field-header">
                    <p className="form-label">e-Money PIN</p>
                  </div>
                </label>
                <input name="eMoneyPin" {...register("eMoneyPin")} />
              </Field>
            </div>
          )}
        </FormSection>
        {/* <input type="submit" /> */}
      </form>
    </Container>
  );
}
