import styled from "styled-components";

export const CartOuterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 1.6rem;
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

export const RemoveAndCheckout = styled.p`
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

export const AddedProducts = styled.section`
  margin-top: 3.1rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const AddedProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductAndPriceContainer = styled.div``;

export const AddedProductName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.67;
  color: #000;
`;

export const AddedProductPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.79;
  color: #000;
  opacity: 0.5;
`;

export const AddedProductImg = styled.img`
  width: 6.4rem;
  object-fit: cover;
`;

export const AmountContainer = styled.div`
  width: 9.6rem;
  height: 3.2rem;
  background-color: #f1f1f1;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: normal;
  color: #000;
`;

export const TotalAmountContainer = styled(AddedProduct)`
  margin-top: 3.2rem;
`;

export const CartCheckoutBtn = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: #d87d4a;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #fff;
  border: none;
  margin-top: 2.4rem;
`;
