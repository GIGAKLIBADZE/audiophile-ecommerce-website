import React from "react";
// import { HeaderContainer, HeaderImage } from "./HomeStyles";
import { HeaderContainer } from "./HeaderLayoutStyles";
import { HeaderImage } from "./HomeStyles";

const HomeHeader: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderImage src="/images/home/mobile/image-header.jpg" alt="test" />
      </HeaderContainer>
    </>
  );
};

export default HomeHeader;
