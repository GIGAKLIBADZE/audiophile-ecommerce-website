import Burger from "/images/shared/tablet/icon-hamburger.svg";
import Title from "/images/shared/desktop/logo.svg";
import Basket from "/images/shared/desktop/icon-cart.svg";
import { HeaderContainer } from "../components/home/HeaderLayoutStyles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { cartShow } from "../features/shop/shopSlice";

const HeaderLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <HeaderContainer>
        <img src={Burger} alt="Menu" />
        <img src={Title} alt="Title" />
        <img src={Basket} alt="Basket" onClick={() => dispatch(cartShow())} />
      </HeaderContainer>
    </div>
  );
};

export default HeaderLayout;
