import {
  AddedProduct,
  AddedProductImg,
  AddedProductName,
  AddedProductPrice,
  AddedProducts,
  AmountContainer,
  CartCheckoutBtn,
  CartContainer,
  CartHeader,
  CartOuterContainer,
  CartTitleAndAmount,
  ProductAndPriceContainer,
  RemoveAndCheckout,
  TotalAmountContainer,
  TotalPrice,
} from "./CartStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IItem } from "../../types/types";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { increaseAmount } from "../../features/shop/shopSlice";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const amountOfProducts = useSelector(
    (store: RootState) => store.shop.amounts
  );

  const data = useSelector((store: RootState) => store.fetchedInformation.info);

  return (
    <CartOuterContainer>
      <CartContainer>
        <CartHeader>
          <CartTitleAndAmount>CART (3)</CartTitleAndAmount>
          <RemoveAndCheckout>Remove all</RemoveAndCheckout>
        </CartHeader>
        <AddedProducts>
          {data
            .filter((item: IItem) => amountOfProducts.hasOwnProperty(item.slug))
            .map((item: IItem) => (
              <AddedProduct key={item.id}>
                <AddedProductImg src={item.image.mobile} alt="Product" />
                <ProductAndPriceContainer>
                  <AddedProductName>{item.name}</AddedProductName>
                  <AddedProductPrice>{item.price}</AddedProductPrice>
                </ProductAndPriceContainer>
                {Object.entries(amountOfProducts).map(([key, value]) => {
                  if (key === item.slug) {
                    return (
                      <AmountContainer>
                        <span style={{ opacity: "0.25" }}>-</span>
                        {value}
                        <span
                          style={{ opacity: "0.25" }}
                          onClick={() => {
                            dispatch(increaseAmount(item.slug));
                          }}
                        >
                          +
                        </span>
                      </AmountContainer>
                    );
                  }
                })}
              </AddedProduct>
            ))}
        </AddedProducts>
        <div>
          <TotalAmountContainer>
            <RemoveAndCheckout>TOTAL</RemoveAndCheckout>
            <TotalPrice>$ 5,396</TotalPrice>
          </TotalAmountContainer>
          <CartCheckoutBtn>CHECKOUT</CartCheckoutBtn>
        </div>
      </CartContainer>
    </CartOuterContainer>
  );
};

export default Cart;
