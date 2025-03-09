import HomeHeader from "../components/home/HomeHeader";
import HomeProducts from "../components/home/HomeProducts";
import HomeCategories from "../components/home/HomeCategories";
import Cart from "../components/cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Home: React.FC = () => {
  const cart: boolean = useSelector((store: RootState) => store.shop.showCart);

  return (
    <div>
      {cart ? <Cart /> : null}
      <HomeHeader />
      <div style={{ marginTop: "9.2rem" }}>
        <HomeCategories />
      </div>
      <HomeProducts />
    </div>
  );
};

export default Home;
