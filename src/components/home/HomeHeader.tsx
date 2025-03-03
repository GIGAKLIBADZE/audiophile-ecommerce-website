import React from "react";
import {
  HeaderImage,
  HeaderContainer,
  ImageContainer,
  HeaderTextContainer,
  NewProductText,
  ProductName,
  AboutProduct,
  UpperButton,
} from "./HomeHeaderStyles";

const HomeHeader: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <ImageContainer>
          <HeaderImage src="/images/home/mobile/image-header.jpg" alt="test" />
        </ImageContainer>
        <HeaderTextContainer>
          <NewProductText>NEW PRODUCT</NewProductText>
          <ProductName style={{ marginTop: "1.6rem" }}>
            XX99 Mark II HeadphoneS
          </ProductName>
          <AboutProduct>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </AboutProduct>
          <div style={{ marginTop: "2.8rem" }}></div>
          <UpperButton>SEE PRODUCT</UpperButton>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  );
};

export default HomeHeader;
