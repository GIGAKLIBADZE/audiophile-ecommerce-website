import React from "react";
import ShopAddress from "./ShopAddress";
import Headphones from "/downloaded/category-headphones.png";
import Speaker from "/downloaded/category-speaker.png";
import Earphones from "/downloaded/category-earphones.png";
import {
  CategoriesContainer,
  CategoryContainer,
  Title,
} from "./HomeCategoriesStyles";

const HomeCategories: React.FC<{ data: any }> = ({ data }) => {
  if (!data || !data[0] || !data[5].categoryImage.mobile || !data[2].others) {
    return <div>Loading...</div>;
  }

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
