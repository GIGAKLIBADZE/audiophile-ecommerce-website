import { GoBack } from "../components/product/ProductDetailsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IItem } from "../types/types";
import {
  BillingDetailsPart,
  CheckoutContainer,
  CheckoutLabel,
  CheckoutMainContainer,
  CheckoutTitle,
  ContinuePayBtn,
  DetailedTitle,
  DetailsPartContainer,
  EMoneyDetailsPart,
  EntireSummaryContainer,
  ErrorText,
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
} from "../components/checkout/CheckoutStyles";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
        .max(20, "Too many digits.")
        .when("paymentMethod", {
          is: (val: string) => val === "e-Money",
          then: (schema) => schema.required("e-Money PIN is required!"),
          otherwise: (schema) => schema.notRequired(),
        }),
      eMoneyPin: yup
        .string()
        .max(10, "Too many digits")
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
  } = useForm<IForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);
  const manualSubmit = handleSubmit(onSubmit);

  let paymentMethod = watch("paymentMethod");
  const isCashOnDelivery = paymentMethod === "Cash on Delivery";

  return (
    <CheckoutMainContainer>
      <GoBack>Go Back</GoBack>
      <div>
        <CheckoutContainer>
          <CheckoutTitle>CHECKOUT</CheckoutTitle>
          <form>
            <DetailsPartContainer>
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

                  {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
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
                  <CheckoutLabel $hasError={!!errors.address} htmlFor="address">
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
                    htmlFor="zip-code"
                  >
                    Zip Code
                  </CheckoutLabel>
                  <InputItself
                    $hasError={!!errors.zipCode}
                    type="string"
                    id="zip-code"
                    placeholder="10001"
                    {...register("zipCode")}
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
                  {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel $hasError={!!errors.country} htmlFor="country">
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
                  onClick={() => setValue("paymentMethod", "e-Money")}
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
                  onClick={() => setValue("paymentMethod", "Cash on Delivery")}
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
                />
                {errors.eMoneyPin && (
                  <ErrorText>{errors.eMoneyPin.message}</ErrorText>
                )}
              </InputContainer>
            </EMoneyDetailsPart>
          </form>
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
          <ContinuePayBtn onClick={manualSubmit}>CONTINUE & PAY</ContinuePayBtn>
        </SummaryContainer>
      </div>
    </CheckoutMainContainer>
  );
};

export default Checkout;
