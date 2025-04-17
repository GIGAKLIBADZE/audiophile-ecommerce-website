import { GoBack } from "../components/product/ProductDetailsStyles";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IItem } from "../types/types";
import {
  AddedProduct,
  AddedProductImg,
  AddedProductName,
  AddedProductPrice,
  AmountContainer,
  ProductAndPriceContainer,
} from "../components/cart/CartStyles";
import { useDispatch } from "react-redux";
import {
  BillingDetailsPart,
  CheckoutContaienr,
  CheckoutLabel,
  CheckoutMainContainer,
  CheckoutTitle,
  DetailedTitle,
  DetailsPartContainer,
  InputContainer,
  InputItself,
  PaymentDetailsDetailPart,
  PaymentMethod,
  PaymentMethodText,
  ShippingDetailPart,
} from "../components/checkout/checkoutStyles";

const Checkout: React.FC = () => {
  const amountOfProducts = useSelector(
    (store: RootState) => store.shop.amounts
  );
  const data = useSelector((store: RootState) => store.fetchedInformation.info);
  let totalPrice = 0;

  return (
    <CheckoutMainContainer>
      <GoBack>Go Back</GoBack>
      <div>
        <CheckoutContaienr>
          <CheckoutTitle>CHECKOUT</CheckoutTitle>
          <form>
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
        <div>
          <h6>SUMMARY</h6>
          <section>
            {data
              .filter((item: IItem) =>
                amountOfProducts.hasOwnProperty(item.slug)
              )
              .map((item: IItem) => (
                <div key={item.id}>
                  <img
                    src={item.image.mobile}
                    alt="Product"
                    style={{ width: "8rem", objectFit: "contain" }}
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <p>${item.price.toLocaleString()}</p>
                  </div>
                  {Object.entries(amountOfProducts).map(([key, value]) => {
                    if (key === item.slug) {
                      totalPrice += item.price * value;
                      return <div>x{value}</div>;
                    }
                  })}
                </div>
              ))}
          </section>
          <section>
            <div>
              <div>
                <p>TOTAL</p>
                <strong>{totalPrice.toLocaleString()}</strong>
              </div>
              <div>
                <p>SHIPPING</p>
                <strong>$50</strong>
              </div>
              <div>
                <p>VAT (INCLUDED)</p>
                <strong>
                  {Number(
                    ((totalPrice * 0.247) / 1.247).toFixed()
                  ).toLocaleString()}
                </strong>
              </div>
            </div>
            <div>
              <p>GRAND TOTAL</p>
              <strong></strong>
            </div>
          </section>
          <button>CONTINUE & PAY</button>
        </div>
      </div>
    </CheckoutMainContainer>
  );
};

export default Checkout;
