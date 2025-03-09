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
  ImageContainer,
  Image,
  ForShopAddress,
} from "./HomeCategoriesStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const HomeCategories: React.FC = () => {
  const data: any = useSelector(
    (store: RootState) => store.fetchedInformation.info
  );

  if (!data || !data[0] || !data[5].categoryImage.mobile || !data[2].others) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CategoriesContainer>
        <CategoryContainer>
          <ImageContainer>
            <Image src={Headphones} alt="Headphones" />
            <Blurred></Blurred>
          </ImageContainer>
          <Title>HEADPHONES</Title>
          <ForShopAddress>
            <ShopAddress />
          </ForShopAddress>
        </CategoryContainer>
        <CategoryContainer>
          <ImageContainer>
            <Image
              src={Speaker}
              alt="Speaker"
              style={{ marginTop: "-5.12rem" }}
            />
            <Blurred></Blurred>
          </ImageContainer>
          <Title>SPEAKERS</Title>
          <ForShopAddress>
            <ShopAddress />
          </ForShopAddress>
        </CategoryContainer>
        <CategoryContainer>
          <ImageContainer>
            <Image src={Earphones} alt="Earphones" />
            <Blurred></Blurred>
          </ImageContainer>
          <Title>EARPHONES</Title>
          <ForShopAddress>
            <ShopAddress />
          </ForShopAddress>
        </CategoryContainer>
      </CategoriesContainer>
    </div>
  );
};

export default HomeCategories;
