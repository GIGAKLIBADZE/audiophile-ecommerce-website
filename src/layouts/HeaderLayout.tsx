import Burger from "/images/shared/tablet/icon-hamburger.svg";
import Title from "/images/shared/desktop/logo.svg";
import Basket from "/images/shared/desktop/icon-cart.svg";

const HeaderLayout: React.FC = () => {
  return (
    <div>
      <header>
        <img src={Burger} alt="Menu" />
        <img src={Title} alt="Title" />
        <img src={Basket} alt="Basket" />
        <div></div>
      </header>
    </div>
  );
};

export default HeaderLayout;
