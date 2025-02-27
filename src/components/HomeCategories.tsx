import React from "react";
import Headphones from "/images/cart/image-xx99-mark-one-headphones.jpg";
import ShopAddress from "./ShopAddress";
import Speaker from "/images/cart/image-zx9-speaker.jpg";
import Earphones from "/images/cart/image-yx1-earphones.jpg";

const HomeCategories: React.FC = () => {
  return (
    <>
      <nav>
        <div>
          <img src={Headphones} alt="Headphones" />
          <h4>HEADPHONES</h4>
          <ShopAddress />
        </div>
        <div>
          <img src={Speaker} alt="Speaker" />
          <h4>SPEAKERS</h4>
          <ShopAddress />
        </div>
        <div>
          <img src={Earphones} alt="Earphones" />
          <h4>EARPHONES</h4>
          <ShopAddress />
        </div>
      </nav>
    </>
  );
};

export default HomeCategories;
