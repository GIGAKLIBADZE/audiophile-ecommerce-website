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
  EntireSummaryContainer,
  InputContainer,
  InputItself,
  PaymentDetailsDetailPart,
  PaymentMethod,
  PaymentMethodText,
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
      name: yup.string().required("Required!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);
  const manualSubmit = handleSubmit(onSubmit);
  const name = watch("name");

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
                  {name}
                  <CheckoutLabel htmlFor="name">Name</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                    {...register("name")}
                  />
                  {/* {errors.name?.message ? (
                    <p className="text-[2rem] text-red">Wrong format</p>
                  ) : null} */}
                  {/* <p className="text-[2rem] text-red">{errors.name?.message}</p> */}
                  {errors.name && <p>errors.name.message</p>}
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="email">Email Address</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="email"
                    placeholder="alexei@mail.com"
                    {...register("email")}
                  />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="phone">Phone Number</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="phone"
                    placeholder="+1 202-555-0136"
                    {...register("phone")}
                  />
                </InputContainer>
              </BillingDetailsPart>
            </DetailsPartContainer>
            <DetailsPartContainer>
              <DetailedTitle>SHIPPING INFO</DetailedTitle>
              <ShippingDetailPart>
                <InputContainer>
                  <CheckoutLabel htmlFor="address">Your Address</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="address"
                    placeholder="1137 Williams Avenue"
                    {...register("address")}
                  />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="zip-code">Zip Code</CheckoutLabel>
                  <InputItself
                    type="number"
                    id="zip-code"
                    placeholder="10001"
                    {...register("zipCode")}
                  />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="city">City</CheckoutLabel>
                  <InputItself type="text" id="city" placeholder="New York" />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="country">Country</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="country"
                    placeholder="United States"
                    {...register("country")}
                  />
                </InputContainer>
              </ShippingDetailPart>
            </DetailsPartContainer>
            <DetailsPartContainer>
              <DetailedTitle>PAYMENT DETAILS</DetailedTitle>

              <div>
                <PaymentDetailsDetailPart>
                  <CheckoutLabel>Payment Method</CheckoutLabel>
                  <PaymentMethod>
                    <div>
                      <input
                        type="radio"
                        defaultChecked
                        {...register("paymentMethod")}
                      />
                    </div>
                    <PaymentMethodText>e-Money</PaymentMethodText>
                  </PaymentMethod>
                  <PaymentMethod>
                    <div>
                      <input type="radio" {...register("paymentMethod")} />
                    </div>
                    <PaymentMethodText>Cash on Delivery</PaymentMethodText>
                  </PaymentMethod>
                </PaymentDetailsDetailPart>
              </div>
              <InputContainer>
                <CheckoutLabel htmlFor="e-money-num">
                  e-Money Number
                </CheckoutLabel>
                <InputItself
                  type="number"
                  id="e-money-num"
                  placeholder="238521993"
                  {...register("eMoneyNum")}
                />
              </InputContainer>
              <InputContainer>
                <CheckoutLabel htmlFor="e-money-pin">e-Money Pin</CheckoutLabel>
                <InputItself
                  type="number"
                  id="e-money-pin"
                  placeholder="6891"
                  {...register("eMoneyPin")}
                />
              </InputContainer>
            </DetailsPartContainer>
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
