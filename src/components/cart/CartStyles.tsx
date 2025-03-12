import styled from "styled-components";

export const CartOuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 1.6rem 2.4rem 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const CartContainer = styled.div`
  width: 87.2%;
  padding: 3.2rem 2.8rem;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 11.4rem;
  margin-inline: auto;
`;

export const CartTitleAndAmount = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.29px;
  color: #000;
`;

export const Remove = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.67;
  color: #000;
  opacity: 0.5;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
