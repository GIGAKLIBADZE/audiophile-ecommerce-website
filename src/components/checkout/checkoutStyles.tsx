import styled from "styled-components";

export const CheckoutOuterContainer = styled.div`
  position: relative;
`;

export const CheckoutMainContainer = styled.div`
  width: 87.2%;
  margin-inline: auto;
  padding-top: 1.6rem;
  padding-bottom: 12.9rem;

  @media (min-width: 768px) {
    width: 89.6%;
    padding-top: 4.8rem;
    padding-bottom: 14.8rem;
  }

  @media (min-width: 1440px) {
    width: 77.1%;
    padding-top: 7.9rem;
    padding-bottom: 14.1rem;
  }
`;

export const ContextsDivider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 2.4rem;

  @media (min-width: 1440px) {
    flex-direction: row;
    margin-top: 3.8rem;

    & > :first-child {
      flex: 2;
    }

    & > :last-child {
      flex: 1;
    }
  }
`;

export const CheckoutContainer = styled.div`
  border-radius: 8px;
  padding: 2.4rem 2.4rem 3.1rem 2.3rem;
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 3rem 2.7rem 3rem 2.75rem;
  }

  @media (min-width: 1440px) {
    padding: 5.4rem 4.8rem 4.8rem 4.7rem;
  }
`;

export const CheckoutTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 1.13;
    letter-spacing: 1.14px;
  }
`;

export const DetailedTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.92;
  letter-spacing: 0.93px;
  color: #d87d4a;
`;

export const CheckoutLabel = styled.label<{ $hasError: boolean }>`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.21px;

  color: ${({ $hasError }) => ($hasError ? "#cd2c2c" : "#000")};
`;

export const PaymentMethodTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.21px;
  color: #000;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  position: relative;
`;

export const InputItself = styled.input<{ $hasError: boolean }>`
  height: 5.6rem;
  border-radius: 8px;
  background-color: #fff;
  border: solid 0.1rem ${({ $hasError }) => ($hasError ? "#cd2c2c" : "#cfcfcf")};
  padding-top: 1.8rem;
  padding-bottom: 1.9rem;
  padding-left: 2.4rem;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #000;

  &::placeholder {
    opacity: 0.4;
  }
`;

export const Form = styled.form``;

export const DetailsPartContainer = styled.div`
  display: grid;
  gap: 1.6rem;
  margin-top: 3.2rem;
`;

export const BillingDetailsPart = styled.div`
  display: grid;
  gap: 2.4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.6rem;
  }
`;

export const EMoneyDetailsPart = styled(BillingDetailsPart)`
  margin-top: 2.4rem;
`;

export const ShippingDetailPart = styled(BillingDetailsPart)`
  & > :first-child {
    grid-column: 1 / -1;
    width: 100%;
  }

  & > :nth-child(4) {
    grid-column: 1 / 2;
  }
`;

export const PaymentDetailsDetailPart = styled(BillingDetailsPart)`
  gap: 1.6rem;

  @media (min-width: 768px) {
    & > :nth-child(3) {
      grid-column: 2 / 3;
    }
  }
`;

export const PaymentMethod = styled.div<{ $checked: boolean }>`
  height: 5.6rem;
  border-radius: 8px;
  border: solid 0.1rem ${({ $checked }) => ($checked ? "#d87d4a" : "#cfcfcf")};
  background-color: #fff;
  padding-top: 1.8rem;
  padding-bottom: 1.9rem;
  padding-left: 1.6rem;
  display: flex;
  gap: 1.6rem;

  &:checked > input {
  }
`;

export const PaymentMethodText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #000;
  display: flex;
  align-items: center;
`;

export const SummaryContainer = styled.div`
  padding: 3.2rem 2.4rem;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 768px) {
    padding-inline: 3.3rem;
  }
`;

export const SummaryTitle = styled.h6`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.29px;
  color: #000;
`;

export const SummaryProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SummaryProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SummaryProductInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-left: 1.6rem;
`;

export const SummaryProductTitle = styled.strong`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.67;
  color: #000;
`;

export const SummaryProductPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.79;
  color: #000;
  opacity: 0.5;
`;

export const SummaryProductAmount = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.29px;
  color: #000;
  opacity: 0.5;
`;

export const SummaryImg = styled.img`
  width: 6.4rem;
  object-fit: contain;
`;

export const EntireSummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const UpperSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SummaryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SummaryInfoText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.67;
  color: #000;
  opacity: 0.5;
`;

export const SummaryPrice = styled.strong`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: normal;
  color: #000;
  display: flex;
  gap: 0.4rem;
`;

export const ActionBtn = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: #d87d4a;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #fff;
  border: none;
`;

export const ErrorText = styled.p`
  position: absolute;
  right: 0;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.21px;
  color: #cd2c2c;
`;
