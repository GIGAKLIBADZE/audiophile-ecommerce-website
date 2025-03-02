import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.2rem 2.4rem 3.8rem;
  background-color: #101010;
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
