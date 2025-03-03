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
  width: 17.2rem;
  height: 20.7rem;
  margin-inline: auto;
`;

export const FirstImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 5.5rem;
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
  margin-top: 8.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -130px;
`;

export const CirclesImg = styled.img`
  width: 175%;
`;

export const SecondImageContainer = styled.div`
  position: relative;
`;

export const SecondImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const SecondProductText = styled.h5`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 2px;
  color: #000;
`;

export const SecondProductBtn = styled.button`
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
