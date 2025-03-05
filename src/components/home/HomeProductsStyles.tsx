import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 12rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ProductContainer = styled.div`
  width: 87.2%;
  padding: 0 2.4rem 5.5rem;
  border-radius: 8px;
  background-color: #d87d4a;
  margin-inline: auto;
  text-align: center;
  position: relative;
`;

export const SecondProductContainer = styled.div`
  width: 87.2%;
  margin-inline: auto;
  position: relative;
`;

export const FirstImageContainer = styled.div`
  margin-inline: auto;
  margin-top: 5.5rem;
`;

export const FirstImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const FirstProductBtn = styled.button`
  width: 16rem;
  height: 4.8rem;
  background-color: #000000;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #fff;
  margin-top: 2.4rem;
`;

export const AboutFirstProductContainer = styled.div`
  /* margin-top: 8.7rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -130px;
  left: 0;
`;

export const CirclesImg = styled.img`
  width: 175%;
`;

export const SecondImageContainer = styled.div`
  position: relative;
`;

export const SecondImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const SecondAndThirdProductText = styled.h5`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 2px;
  color: #000;
`;

export const SecondAndThirdProductBtn = styled.button`
  width: 16rem;
  height: 4.8rem;
  border: solid 0.1rem #000;
  background: transparent;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #000;
  margin-top: 3.2rem;
`;

export const AboutSecondProductContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 10.1rem;
  left: 2.4rem;
`;

export const ThirdProductContainer = styled.div`
  width: 87.2%;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
`;

export const ThirdImageContainer = styled.div`
  margin-inline: auto;
`;

export const ThirdImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ThirdProductTextsContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 4.1rem 5.6rem 4.1rem 2.4rem;
  background-color: #f1f1f1;
  margin-top: 2.4rem;
`;
