import Circles from "/images/home/desktop/pattern-circles.svg";
import SampleProduct from "/images/home/mobile/image-speaker-zx7.jpg";
import SampleProduct2 from "/images/home/mobile/image-earphones-yx1.jpg";
import {
  AboutFirstProductContainer,
  AboutSecondProductContainer,
  CirclesContainer,
  CirclesImg,
  FirstImage,
  FirstImageContainer,
  FirstProductBtn,
  MainContainer,
  ProductContainer,
  SecondAndThirdProductBtn,
  SecondAndThirdProductText,
  SecondImage,
  SecondImageContainer,
  SecondProductContainer,
  ThirdImage,
  ThirdImageContainer,
  ThirdProductContainer,
  ThirdProductTextsContainer,
} from "./HomeProductsStyles";
import { AboutProduct, ProductName } from "./HomeHeaderStyles";

const HomeProducts: React.FC<{ data: any }> = ({ data }) => {
  if (
    !data ||
    !data[5] ||
    !data[5].categoryImage ||
    !data[5].categoryImage.mobile
  ) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <ProductContainer>
        <FirstImageContainer>
          <FirstImage
            src={data[5].categoryImage.mobile}
            alt="First product image"
          />
        </FirstImageContainer>
        <CirclesContainer>
          <CirclesImg src={Circles} alt="Circles" />
        </CirclesContainer>
        <AboutFirstProductContainer>
          <ProductName style={{ width: "80%" }}>ZX9 SPEAKER</ProductName>
          <AboutProduct>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </AboutProduct>
          <FirstProductBtn>SEE PRODUCT</FirstProductBtn>
        </AboutFirstProductContainer>
      </ProductContainer>
      <SecondProductContainer>
        <AboutSecondProductContainer>
          <SecondAndThirdProductText>ZX7 SPEAKER</SecondAndThirdProductText>
          <SecondAndThirdProductBtn>SEE PRODUCT</SecondAndThirdProductBtn>
        </AboutSecondProductContainer>
        <SecondImageContainer>
          <SecondImage src={SampleProduct} />
        </SecondImageContainer>
      </SecondProductContainer>
      <ThirdProductContainer>
        <ThirdImageContainer>
          <ThirdImage src={SampleProduct2} />
        </ThirdImageContainer>
        <ThirdProductTextsContainer>
          <SecondAndThirdProductText>YX1 EARPHONES</SecondAndThirdProductText>
          <SecondAndThirdProductBtn>SEE PRODUCT</SecondAndThirdProductBtn>
        </ThirdProductTextsContainer>
      </ThirdProductContainer>
    </MainContainer>
  );
};

export default HomeProducts;
