import React from "react";
import {
  HeaderImage,
  HeaderContainer,
  ImageContainer,
  HeaderTextContainer,
  NewProductText,
  NewProductname,
  AboutNewProduct,
} from "./HomeHeaderStyles";
import SeeProduct from "./SeeProduct";

const HomeHeader: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <ImageContainer>
          <HeaderImage src="/images/home/mobile/image-header.jpg" alt="test" />
        </ImageContainer>
        <HeaderTextContainer>
          <NewProductText>NEW PRODUCT</NewProductText>
          <NewProductname>XX99 Mark II HeadphoneS</NewProductname>
          <AboutNewProduct>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </AboutNewProduct>
          <div style={{ marginTop: "2.8rem" }}>
            <SeeProduct />
          </div>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default HomeHeader;
