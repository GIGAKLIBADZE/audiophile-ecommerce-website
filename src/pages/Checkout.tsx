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

const Checkout: React.FC = () => {
  const amountOfProducts = useSelector(
    (store: RootState) => store.shop.amounts
  );
  const data = useSelector((store: RootState) => store.fetchedInformation.info);
  let totalPrice = 0;

  return (
    <div>
      <GoBack>Go Back</GoBack>
      <div>
        <div>
          <h5>CHECKOUT</h5>
          <form>
            <div>
              <p>BILLING DETAILS</p>
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Alexei Ward" />
                </div>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" placeholder="alexei@mail.com" />
                </div>
                <div>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" placeholder="+1 202-555-0136" />
                </div>
              </div>
            </div>
            <div>
              <p>SHIPPING INFO</p>
              <div>
                <div>
                  <label htmlFor="address">Your Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="1137 Williams Avenue"
                  />
                </div>
                <div>
                  <label htmlFor="zip-code">Zip Code</label>
                  <input type="number" id="zip-code" placeholder="10001" />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="New York" />
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" placeholder="United States" />
                </div>
              </div>
            </div>
            <div>
              <p>PAYMENT DETAILS</p>
              <div>
                <div>
                  <p>Payment Method</p>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                      <p>e-Money</p>
                    </div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                      <p>Cash on Delivery</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="e-money-num">e-Money Number</label>
                  <input
                    type="number"
                    id="e-money-num"
                    placeholder="238521993"
                  />
                </div>
                <div>
                  <label htmlFor="e-money-pin">e-Money Pin</label>
                  <input type="number" id="e-money-pin" placeholder="6891" />
                </div>
              </div>
            </div>
          </form>
        </div>
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
                    <p>${item.price}</p>
                  </div>
                  {Object.entries(amountOfProducts).map(([key, value]) => {
                    totalPrice += item.price * value;
                    if (key === item.slug) {
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
                <strong>{totalPrice}</strong>
              </div>
              <div>
                <p>SHIPPING</p>
                <strong></strong>
              </div>
              <div>
                <p>VAT (INCLUDED)</p>
                <strong></strong>
              </div>
            </div>
            <div>
              <p>GRAND TOTAL</p>
              <strong></strong>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
