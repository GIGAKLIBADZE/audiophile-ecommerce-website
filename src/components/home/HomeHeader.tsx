import React from "react";
// import { HeaderContainer } from "./HeaderLayoutStyles";
import { HeaderImage, HeaderContainer, ImageContainer } from "./HomeStyles";

const HomeHeader: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        {/* {/* <ImageContainer> */}
        <HeaderImage src="/images/home/mobile/image-header.jpg" alt="test" />
        {/* </ImageContainer> */}
      </HeaderContainer>
    </>
  );
};

export default HomeHeader;
