import Title from "/images/shared/desktop/logo.svg";
import Facebook from "/images/shared/desktop/icon-facebook.svg";
import Instagram from "/images/shared/desktop/icon-instagram.svg";
import Twitter from "/images/shared/desktop/icon-twitter.svg";
import {
  FooterSecondContainer,
  FooterInfo,
  FooterInfoAndSocialMediaContainer,
  FooterMenu,
  SocialMediaContainer,
  ImageContainer,
  Image,
  Ad,
  AdLight,
  Description,
  FooterFirstContainer,
} from "../components/home/FooterLayoutStyles";
import BestGear from "/images/shared/mobile/image-best-gear.jpg";
import { useLocation } from "react-router-dom";

const FooterLayout: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/checkout" ? (
        <FooterFirstContainer>
          <ImageContainer>
            <Image src={BestGear} alt="Best gear" />
          </ImageContainer>
          <div>
            <Ad>
              BRINGING YOU THE <AdLight>BEST</AdLight> AUDIO GEAR
            </Ad>
            <Description>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Description>
          </div>
        </FooterFirstContainer>
      ) : null}
      <FooterSecondContainer>
        <div>
          <img src={Title} alt="Title" />
          <FooterMenu>
            <h6>HOME</h6>
            <h6>HEADPHONES</h6>
            <h6>SPEAKERS</h6>
            <h6>EARPHONES</h6>
          </FooterMenu>
        </div>
        <FooterInfoAndSocialMediaContainer>
          <div>
            <FooterInfo>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </FooterInfo>
            <FooterInfo style={{ fontWeight: "bold", marginTop: "4.8rem" }}>
              Copyright 2021. All Rights Reserved
            </FooterInfo>
          </div>
          <SocialMediaContainer>
            <img src={Facebook} alt="Facebook icon" />
            <img src={Instagram} alt="Instagram icon" />
            <img src={Twitter} alt="Twitter icon" />
          </SocialMediaContainer>
        </FooterInfoAndSocialMediaContainer>
      </FooterSecondContainer>
    </div>
  );
};

export default FooterLayout;
