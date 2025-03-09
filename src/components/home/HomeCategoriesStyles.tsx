import styled from "styled-components";

export const CategoriesContainer = styled.nav`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 6.8rem;
  width: 87.2%;
`;

export const CategoryContainer = styled.div`
  height: 16.5rem;
  border-radius: 8px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.07;
  color: #000;
  margin-top: 3.6rem;
`;

export const Shop = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #000;
  opacity: 0.5;
`;

export const Blurred = styled.div`
  width: 9.5rem;
  height: 1.4rem;
  margin: 0 0.3rem 3.2rem 0.1rem;
  background-color: #000;
  filter: blur(25.5px);
  position: absolute;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  margin-top: -5.2rem;
`;

export const ForShopAddress = styled.div`
  margin-top: 1.7rem;
`;
