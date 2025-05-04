import styled from "styled-components";

export const OuterContainer = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 13.4rem 2.4rem 0;
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  padding: 3.2rem;
  border-radius: 8px;
  background-color: #fff;
`;

export const CheckMarkContainer = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: #d87d4a;
  display: flex;
  justify-content: center;
  align-items: center;

  & > :first-child {
    width: 60%;
    height: 60%;
  }
`;

export const Appreciate = styled.h6`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: 0.86px;
  color: #000;
  margin-top: 2.3rem;
`;

export const Confirmation = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.67;
  color: #000;
  opacity: 0.5;
  margin-top: 1.6rem;
`;

export const GrandTotalContainer = styled.div`
  padding: 1.5rem 10.5rem 1.9rem 2.4rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #000;
`;

export const GrandTotalText = styled(Confirmation)`
  margin-top: 0;
  color: #fff;
`;

export const GrandTotalPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: normal;
  color: #fff;
  margin-top: 0.8rem;
`;
