import React from "react";
import {
  HeaderImage,
  HeaderContainer,
  ImageContainer,
} from "./HomeHeaderStyles";

const HomeHeader: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <ImageContainer>
          <HeaderImage src="/images/home/mobile/image-header.jpg" alt="test" />
        </ImageContainer>
      </HeaderContainer>
    </>
  );
};

export default HomeHeader;
