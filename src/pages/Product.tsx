import ProductDetails from "../components/product/ProductDetails";
import ProductDescription from "../components/product/ProductDescription";
import ProductPictures from "../components/product/ProductPictures";
import Suggestions from "../components/product/Suggestions";
import HomeCategories from "../components/home/HomeCategories";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cart from "../components/cart/Cart";

const Product: React.FC = () => {
  const cart: boolean = useSelector((store: RootState) => store.shop.showCart);
  return (
    <>
      {cart ? <Cart /> : null}
      <ProductDetails />
      <ProductDescription />
      <ProductPictures />
      <Suggestions />
      <div style={{ marginTop: "17.2rem" }}>
        <HomeCategories />
      </div>
    </>
  );
};

export default Product;
