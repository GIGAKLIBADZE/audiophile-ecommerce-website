import React from "react";
import Headphones from "/images/cart/image-xx99-mark-one-headphones.jpg";
import ShopAddress from "./ShopAddress";
import Speaker from "/images/cart/image-zx9-speaker.jpg";
import Earphones from "/images/cart/image-yx1-earphones.jpg";
import {
  CategoriesContainer,
  CategoryContainer,
  Title,
} from "./HomeCategoriesStyles";

const HomeCategories: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CategoriesContainer>
        <CategoryContainer>
          <img src={Headphones} alt="Headphones" />
          <Title>HEADPHONES</Title>
          <ShopAddress />
        </CategoryContainer>
        <CategoryContainer>
          <img src={Speaker} alt="Speaker" />
          <Title>SPEAKERS</Title>
          <ShopAddress />
        </CategoryContainer>
        <CategoryContainer>
          <img src={Earphones} alt="Earphones" />
          <Title>EARPHONES</Title>
          <ShopAddress />
        </CategoryContainer>
      </CategoriesContainer>
    </div>
  );
};

export default HomeCategories;
