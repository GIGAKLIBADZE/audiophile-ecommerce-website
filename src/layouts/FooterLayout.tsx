import Title from "/images/shared/desktop/logo.svg";
import Facebook from "/images/shared/desktop/icon-facebook.svg";
import Instagram from "/images/shared/desktop/icon-instagram.svg";
import Twitter from "/images/shared/desktop/icon-twitter.svg";
import { FooterContainer } from "../components/FooterLayoutStyles";

const FooterLayout: React.FC = () => {
  return (
    <div>
      <FooterContainer>
        <div>
          <img src={Title} alt="Title" />
          <nav>
            <h6>HOME</h6>
            <h6>HEADPHONES</h6>
            <h6>SPEAKERS</h6>
            <h6>EARPHONES</h6>
          </nav>
        </div>
        <div>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
          <section>
            <img src={Facebook} alt="Facebook icon" />
            <img src={Instagram} alt="Instagram icon" />
            <img src={Twitter} alt="Twitter icon" />
          </section>
        </div>
      </FooterContainer>
    </div>
  );
};

export default FooterLayout;
