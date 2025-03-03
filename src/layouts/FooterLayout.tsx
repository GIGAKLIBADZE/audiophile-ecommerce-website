import Title from "/images/shared/desktop/logo.svg";
import Facebook from "/images/shared/desktop/icon-facebook.svg";
import Instagram from "/images/shared/desktop/icon-instagram.svg";
import Twitter from "/images/shared/desktop/icon-twitter.svg";
import {
  FooterContainer,
  FooterInfo,
  FooterInfoAndSocialMediaContainer,
  FooterMenu,
  SocialMediaContainer,
} from "../components/home/FooterLayoutStyles";
import BestGear from "/images/shared/mobile/image-best-gear.jpg";

const FooterLayout: React.FC = () => {
  return (
    <div>
      <div>
        <img
          src={BestGear}
          alt="Best gear"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
      <div>
        <h4>Bringing you the best audio gear</h4>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <FooterContainer>
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
      </FooterContainer>
    </div>
  );
};

export default FooterLayout;
