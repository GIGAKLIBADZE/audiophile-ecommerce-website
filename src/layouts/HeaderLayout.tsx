import Burger from "/images/shared/tablet/icon-hamburger.svg";
import Title from "/images/shared/desktop/logo.svg";
import Basket from "/images/shared/desktop/icon-cart.svg";
import { HeaderContainer } from "../components/home/HeaderLayoutStyles";

const HeaderLayout: React.FC = () => {
  return (
    <div>
      <HeaderContainer>
        <img src={Burger} alt="Menu" />
        <img src={Title} alt="Title" />
        <img src={Basket} alt="Basket" />
      </HeaderContainer>
    </div>
  );
};

export default HeaderLayout;
