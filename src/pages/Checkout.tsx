import { GoBack } from "../components/product/ProductDetailsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IItem } from "../types/types";
import { useState } from "react";
import {
  BillingDetailsPart,
  CheckoutContainer,
  CheckoutLabel,
  CheckoutMainContainer,
  CheckoutTitle,
  ContextsDivider,
  ActionBtn,
  DetailedTitle,
  DetailsPartContainer,
  EMoneyDetailsPart,
  EntireSummaryContainer,
  ErrorText,
  Form,
  InputContainer,
  InputItself,
  PaymentDetailsDetailPart,
  PaymentMethod,
  PaymentMethodText,
  PaymentMethodTitle,
  ShippingDetailPart,
  SummaryContainer,
  SummaryImg,
  SummaryInfoContainer,
  SummaryInfoText,
  SummaryPrice,
  SummaryProductAmount,
  SummaryProductContainer,
  SummaryProductInnerContainer,
  SummaryProductPrice,
  SummaryProductTitle,
  SummaryProductsContainer,
  SummaryTitle,
  UpperSummaryContainer,
  CheckoutOuterContainer,
} from "../components/checkout/CheckoutStyles";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import SuccessfulOrder from "../components/checkout/SuccessfulOrder";

const Checkout: React.FC = () => {
  const amountOfProducts = useSelector(
    (store: RootState) => store.shop.amounts
  );
  const data = useSelector((store: RootState) => store.fetchedInformation.info);

  const filteredProducts = data.filter((item: IItem) =>
    amountOfProducts.hasOwnProperty(item.slug)
  );

  const totalPrice = filteredProducts.reduce((sum: number, item: IItem) => {
    return sum + item.price * amountOfProducts[item.slug];
  }, 0);

  const grandTotal = totalPrice + 50;

  const [pay, setPay] = useState<boolean>(false);

  const schema = yup
    .object({
      name: yup.string().required("Name is required!"),
      email: yup.string().email("Wrong format!").required("Email is required!"),
      phone: yup
        .string()
        .required("Phone is required!")
        .matches(
          /^\+?[0-9]{1,3}[-\s.]?(\(?\d{1,4}\)?)[-\s.]?\d{1,4}([-\s.]?\d{1,9}){1,2}$/,
          "Wrong Format!"
        ),
      address: yup.string().required("Address is required!"),
      zipCode: yup
        .string()
        .max(10, "Too many digits.")
        .required("Zip code is required!"),
      city: yup.string().required("City is required!"),
      country: yup.string().required("Country is required!"),
      eMoneyNum: yup
        .string()
        .when("paymentMethod", {
          is: (val: string) => val === "e-Money",
          then: (schema) => schema.max(10, "Too many digits."),
          otherwise: (schema) => schema.notRequired(),
        })
        .when("paymentMethod", {
          is: (val: string) => val === "e-Money",
          then: (schema) => schema.required("e-Money PIN is required!"),
          otherwise: (schema) => schema.notRequired(),
        }),

      eMoneyPin: yup
        .string()
        .when("paymentMethod", {
          is: (val: string) => val === "e-Money",
          then: (schema) => schema.max(10, "Too many digits."),
          otherwise: (schema) => schema.notRequired(),
        })
        .when("paymentMethod", {
          is: (val: string) => val === "e-Money",
          then: (schema) => schema.required("e-Money number is required!"),
          otherwise: (schema) => schema.notRequired(),
        }),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
    clearErrors,
  } = useForm<IForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IForm> = (data) => setPay(true);
  const manualSubmit = handleSubmit(onSubmit);

  let paymentMethod = watch("paymentMethod");
  const isCashOnDelivery = paymentMethod === "Cash on Delivery";

  const onSubmitChange = (paymentMethod: string) => {
    setValue("paymentMethod", paymentMethod as "e-Money" | "Cash on Delivery");
    if (paymentMethod === "e-Money") {
      trigger(["eMoneyNum", "eMoneyPin"]);
    } else {
      clearErrors(["eMoneyNum", "eMoneyPin"]);
    }
  };

  return (
    <CheckoutOuterContainer>
      <CheckoutMainContainer>
        <GoBack>Go Back</GoBack>
        <ContextsDivider>
          <CheckoutContainer>
            <CheckoutTitle>CHECKOUT</CheckoutTitle>
            <Form>
              <DetailsPartContainer className="default-margin">
                <DetailedTitle>BILLING DETAILS</DetailedTitle>
                <BillingDetailsPart>
                  <InputContainer>
                    <CheckoutLabel $hasError={!!errors.name} htmlFor="name">
                      Name
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.name}
                      type="text"
                      id="name"
                      placeholder="Alexei Ward"
                      {...register("name")}
                    />

                    {errors.name && (
                      <ErrorText>{errors.name.message}</ErrorText>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <CheckoutLabel $hasError={!!errors.email} htmlFor="email">
                      Email Address
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.email}
                      type="text"
                      id="email"
                      placeholder="alexei@mail.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <ErrorText>{errors.email.message}</ErrorText>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <CheckoutLabel $hasError={!!errors.phone} htmlFor="phone">
                      Phone Number
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.phone}
                      type="string"
                      id="phone"
                      placeholder="+1 202-555-0136"
                      {...register("phone")}
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9+-]/g,
                          ""
                        );
                      }}
                    />
                    {errors.phone && (
                      <ErrorText>{errors.phone.message}</ErrorText>
                    )}
                  </InputContainer>
                </BillingDetailsPart>
              </DetailsPartContainer>
              <DetailsPartContainer>
                <DetailedTitle>SHIPPING INFO</DetailedTitle>
                <ShippingDetailPart>
                  <InputContainer>
                    <CheckoutLabel
                      $hasError={!!errors.address}
                      htmlFor="address"
                    >
                      Your Address
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.address}
                      type="text"
                      id="address"
                      placeholder="1137 Williams Avenue"
                      {...register("address")}
                    />
                    {errors.address && (
                      <ErrorText>{errors.address.message}</ErrorText>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <CheckoutLabel
                      $hasError={!!errors.zipCode}
                      htmlFor="zipCode"
                    >
                      Zip Code
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.zipCode}
                      type="string"
                      id="zipCode"
                      placeholder="10001"
                      {...register("zipCode")}
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9]/g,
                          ""
                        );
                      }}
                    />
                    {errors.zipCode && (
                      <ErrorText>{errors.zipCode.message}</ErrorText>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <CheckoutLabel $hasError={!!errors.city} htmlFor="city">
                      City
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.city}
                      type="text"
                      id="city"
                      placeholder="New York"
                      {...register("city")}
                    />
                    {errors.city && (
                      <ErrorText>{errors.city.message}</ErrorText>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <CheckoutLabel
                      $hasError={!!errors.country}
                      htmlFor="country"
                    >
                      Country
                    </CheckoutLabel>
                    <InputItself
                      $hasError={!!errors.country}
                      type="text"
                      id="country"
                      placeholder="United States"
                      {...register("country")}
                    />
                    {errors.country && (
                      <ErrorText>{errors.country.message}</ErrorText>
                    )}
                  </InputContainer>
                </ShippingDetailPart>
              </DetailsPartContainer>
              <DetailsPartContainer>
                <DetailedTitle>PAYMENT DETAILS</DetailedTitle>

                <PaymentDetailsDetailPart>
                  <PaymentMethodTitle>Payment Method</PaymentMethodTitle>
                  <PaymentMethod
                    $checked={paymentMethod === "e-Money"}
                    onClick={() => onSubmitChange("e-Money")}
                  >
                    <div>
                      <input
                        type="radio"
                        value="e-Money"
                        defaultChecked
                        {...register("paymentMethod")}
                      />
                    </div>
                    <PaymentMethodText>e-Money</PaymentMethodText>
                  </PaymentMethod>
                  <PaymentMethod
                    $checked={paymentMethod === "Cash on Delivery"}
                    onClick={() => onSubmitChange("Cash on Delivery")}
                  >
                    <div>
                      <input
                        type="radio"
                        value="Cash on Delivery"
                        {...register("paymentMethod")}
                      />
                    </div>
                    <PaymentMethodText>Cash on Delivery</PaymentMethodText>
                  </PaymentMethod>
                </PaymentDetailsDetailPart>
              </DetailsPartContainer>
              <EMoneyDetailsPart>
                <InputContainer>
                  <CheckoutLabel
                    $hasError={!!errors.eMoneyNum}
                    htmlFor="eMoneyNum"
                  >
                    e-Money Number
                  </CheckoutLabel>
                  <InputItself
                    readOnly={isCashOnDelivery}
                    $hasError={!!errors.eMoneyNum}
                    type="string"
                    id="eMoneyNum"
                    placeholder="238521993"
                    {...register("eMoneyNum")}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                    }}
                  />
                  {errors.eMoneyNum && (
                    <ErrorText>{errors.eMoneyNum.message}</ErrorText>
                  )}
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel
                    $hasError={!!errors.eMoneyPin}
                    htmlFor="eMoneyPin"
                  >
                    e-Money Pin
                  </CheckoutLabel>
                  <InputItself
                    readOnly={isCashOnDelivery}
                    $hasError={!!errors.eMoneyPin}
                    type="string"
                    id="eMoneyPin"
                    placeholder="6891"
                    {...register("eMoneyPin")}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                    }}
                  />
                  {errors.eMoneyPin && (
                    <ErrorText>{errors.eMoneyPin.message}</ErrorText>
                  )}
                </InputContainer>
              </EMoneyDetailsPart>
            </Form>
          </CheckoutContainer>
          <SummaryContainer>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryProductsContainer>
              {filteredProducts.map((item: IItem) => (
                <SummaryProductContainer key={item.id}>
                  <SummaryImg src={item.image.mobile} alt="Product" />
                  <SummaryProductInnerContainer>
                    <div>
                      <SummaryProductTitle>{item.name}</SummaryProductTitle>
                      <SummaryProductPrice>
                        ${item.price.toLocaleString()}
                      </SummaryProductPrice>
                    </div>
                    <SummaryProductAmount>
                      x{amountOfProducts[item.slug]}
                    </SummaryProductAmount>
                  </SummaryProductInnerContainer>
                </SummaryProductContainer>
              ))}
            </SummaryProductsContainer>
            <EntireSummaryContainer>
              <UpperSummaryContainer>
                <SummaryInfoContainer>
                  <SummaryInfoText>TOTAL</SummaryInfoText>
                  <SummaryPrice>
                    <span>$</span>
                    {totalPrice.toLocaleString()}
                  </SummaryPrice>
                </SummaryInfoContainer>
                <SummaryInfoContainer>
                  <SummaryInfoText>SHIPPING</SummaryInfoText>
                  <SummaryPrice>
                    <span>$</span>50
                  </SummaryPrice>
                </SummaryInfoContainer>
                <SummaryInfoContainer>
                  <SummaryInfoText>VAT (INCLUDED)</SummaryInfoText>
                  <SummaryPrice>
                    <span>$</span>
                    {Number(
                      ((totalPrice * 0.247) / 1.247).toFixed()
                    ).toLocaleString()}
                  </SummaryPrice>
                </SummaryInfoContainer>
              </UpperSummaryContainer>
              <SummaryInfoContainer>
                <SummaryInfoText>GRAND TOTAL</SummaryInfoText>
                <SummaryPrice>
                  <span>$</span>
                  {Number(grandTotal.toFixed()).toLocaleString()}
                </SummaryPrice>
              </SummaryInfoContainer>
            </EntireSummaryContainer>
            <ActionBtn onClick={manualSubmit}>CONTINUE & PAY</ActionBtn>
          </SummaryContainer>
        </ContextsDivider>
      </CheckoutMainContainer>
      {pay && <SuccessfulOrder />}
    </CheckoutOuterContainer>
  );
};

export default Checkout;
