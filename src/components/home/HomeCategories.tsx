import React from "react";
import ShopAddress from "./ShopAddress";
import Headphones from "/downloaded/category-headphones.png";
import Speaker from "/downloaded/category-speaker.png";
import Earphones from "/downloaded/category-earphones.png";
import {
  Blurred,
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
          <div style={{ position: "relative" }}>
            <img
              src={Headphones}
              alt="Headphones"
              style={{ marginTop: "-5.2rem" }}
            />
            <Blurred></Blurred>
          </div>
          <Title>HEADPHONES</Title>
          <div style={{ marginTop: "1.7rem" }}>
            <ShopAddress />
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <div style={{ position: "relative" }}>
            <img
              src={Speaker}
              alt="Speaker"
              style={{ marginTop: "-5.12rem" }}
            />
            <Blurred></Blurred>
          </div>
          <Title>SPEAKERS</Title>
          <div style={{ marginTop: "1.7rem" }}>
            <ShopAddress />
          </div>
        </CategoryContainer>
        <CategoryContainer>
          <div style={{ position: "relative" }}>
            <img
              src={Earphones}
              alt="Earphones"
              style={{ marginTop: "-5.2rem" }}
            />
            <Blurred></Blurred>
          </div>
          <Title>EARPHONES</Title>
          <div style={{ marginTop: "1.7rem" }}>
            <ShopAddress />
          </div>
        </CategoryContainer>
      </CategoriesContainer>
    </div>
  );
};

export default HomeCategories;
