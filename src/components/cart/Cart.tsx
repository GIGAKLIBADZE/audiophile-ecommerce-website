import {
  CartContainer,
  CartHeader,
  CartOuterContainer,
  CartTitleAndAmount,
  Remove,
} from "./CartStyles";

const Cart: React.FC = () => {
  return (
    <CartOuterContainer>
      <CartContainer>
        <CartHeader>
          <CartTitleAndAmount>CART (3)</CartTitleAndAmount>
          <Remove>Remove all</Remove>
        </CartHeader>
      </CartContainer>
    </CartOuterContainer>
  );
};

export default Cart;
