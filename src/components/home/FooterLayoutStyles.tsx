import styled from "styled-components";

export const FooterSecondContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.2rem 2.4rem 3.8rem;
  background-color: #101010;
  margin-top: 12rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 10.1rem;
    height: 0.4rem;
    background-color: #d87d4a;
  }
`;

export const FooterMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.92;
  letter-spacing: 2px;
  color: #fff;
  margin-top: 4.8rem;
`;

export const FooterInfoAndSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.8rem;
`;

export const FooterInfo = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.67;
  text-align: center;
  color: #fff;
  opacity: 0.5;
`;

export const SocialMediaContainer = styled.section`
  display: flex;
  gap: 1.6rem;
  margin-top: 5rem;
`;

export const ImageContainer = styled.div`
  width: 87.2%;
  margin-inline: auto;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const Ad = styled.h5`
  width: 87.2%;
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  text-align: center;
  color: #000;
  margin-inline: auto;
  margin-top: 4rem;
`;

export const AdLight = styled.span`
  color: #d87d4a;
`;

export const Description = styled.p`
  width: 87.2%;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.67;
  text-align: center;
  color: #000;
  opacity: 0.5;
  margin-inline: auto;
  margin-top: 3.2rem;
`;
