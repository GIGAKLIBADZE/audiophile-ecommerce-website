import styled from "styled-components";

export const CheckoutMainContainer = styled.div`
  width: 87.2%;
  margin-inline: auto;
  margin-top: 1.6rem;
`;

export const CheckoutContaienr = styled.div`
  border-radius: 8px;
  padding: 2.4rem 2.4rem 3.1rem 2.3rem;
  background-color: #fff;
`;

export const CheckoutTitle = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #000;
`;

export const DetailedTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.92;
  letter-spacing: 0.93px;
  color: #d87d4a;
`;

export const CheckoutLabel = styled.label`
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
`;

export const InputItself = styled.input`
  height: 5.6rem;
  border-radius: 8px;
  border: solid 1px #cfcfcf;
  background-color: #fff;
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

export const DetailsPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 3.2rem;
`;

export const BillingDetailsPart = styled.div`
  display: grid;
  gap: 2.4rem;
`;

export const ShippingDetailPart = styled(BillingDetailsPart)``;

export const PaymentDetailsDetailPart = styled(BillingDetailsPart)``;

export const PaymentMethod = styled.div`
  height: 5.6rem;
  border-radius: 8px;
  border: solid 1px #d87d4a;
  background-color: #fff;
  padding-top: 1.8rem;
  padding-bottom: 1.9rem;
  padding-left: 1.6rem;
  display: flex;
  gap: 1.6rem;
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

export const ContinuePayBtn = styled.button`
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
