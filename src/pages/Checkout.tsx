import { GoBack } from "../components/product/ProductDetailsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IItem } from "../types/types";
import {
  BillingDetailsPart,
  CheckoutContaienr,
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  return (
    <CheckoutMainContainer>
      <GoBack>Go Back</GoBack>
      <div>
        <CheckoutContaienr>
          <CheckoutTitle>CHECKOUT</CheckoutTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DetailsPartContainer>
              <DetailedTitle>BILLING DETAILS</DetailedTitle>
              <BillingDetailsPart>
                <InputContainer>
                  <CheckoutLabel htmlFor="name">Name</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                  />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="email">Email Address</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="email"
                    placeholder="alexei@mail.com"
                  />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="phone">Phone Number</CheckoutLabel>
                  <InputItself
                    type="text"
                    id="phone"
                    placeholder="+1 202-555-0136"
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
                  />
                </InputContainer>
                <InputContainer>
                  <CheckoutLabel htmlFor="zip-code">Zip Code</CheckoutLabel>
                  <InputItself
                    type="number"
                    id="zip-code"
                    placeholder="10001"
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
                        name="payment-method"
                        defaultChecked
                      />
                    </div>
                    <PaymentMethodText>e-Money</PaymentMethodText>
                  </PaymentMethod>
                  <PaymentMethod>
                    <div>
                      <input type="radio" name="payment-method" />
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
                />
              </InputContainer>
              <InputContainer>
                <CheckoutLabel htmlFor="e-money-pin">e-Money Pin</CheckoutLabel>
                <InputItself
                  type="number"
                  id="e-money-pin"
                  placeholder="6891"
                />
              </InputContainer>
            </DetailsPartContainer>
          </form>
        </CheckoutContaienr>
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
          <ContinuePayBtn>CONTINUE & PAY</ContinuePayBtn>
        </SummaryContainer>
      </div>
    </CheckoutMainContainer>
  );
};

export default Checkout;
