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
  SecondImage,
  SecondImageContainer,
  SecondProductBtn,
  SecondProductContainer,
  SecondProductText,
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
          <SecondProductText>ZX7 SPEAKER</SecondProductText>
          <SecondProductBtn>SEE PRODUCT</SecondProductBtn>
        </AboutSecondProductContainer>
        <SecondImageContainer>
          <SecondImage src={SampleProduct} />
        </SecondImageContainer>
      </SecondProductContainer>

      <div>
        <div>
          <img src={SampleProduct2} style={{ width: "4rem", height: "4rem" }} />
        </div>
        <div>
          <h5>YX1 EARPHONES</h5>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </MainContainer>
  );
};

export default HomeProducts;
