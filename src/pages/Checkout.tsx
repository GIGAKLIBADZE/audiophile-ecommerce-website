import { GoBack } from "../components/product/ProductDetailsStyles";

const Checkout: React.FC = () => {
  return (
    <div>
      <GoBack>Go Back</GoBack>
      <div>
        <div>
          <h5>CHECKOUT</h5>
          <p>BILLING DETAILS</p>
          <form>
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
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
