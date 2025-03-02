import React from "react";
import Arrow from "/images/shared/desktop/icon-arrow-right.svg";
import { Shop } from "./HomeCategoriesStyles";

const ShopAddress: React.FC = () => {
  return (
    <div>
      <Shop>SHOP</Shop>
      <img src={Arrow} alt="Right arrow" style={{ marginLeft: "1.3rem" }} />
    </div>
  );
};

export default ShopAddress;
