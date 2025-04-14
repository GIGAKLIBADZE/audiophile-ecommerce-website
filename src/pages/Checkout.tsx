import { GoBack } from "../components/product/ProductDetailsStyles";

const Checkout: React.FC = () => {
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
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
