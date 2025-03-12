import ProductsTitle from "../components/categories/ProductsTitle";
import AvailableProducts from "../components/categories/AvailableProducts";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Category: React.FC = () => {
  const cart: boolean = useSelector((store: RootState) => store.shop.showCart);

  return (
    <>
      {cart ? <Cart /> : null}
      <ProductsTitle />
      <AvailableProducts />
    </>
  );
};

export default Category;
