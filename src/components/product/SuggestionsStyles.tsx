import styled from "styled-components";
import { DetailsHeadLine } from "./ProductDescriptionStyles";

export const SuggestionsOuterContainer = styled.div`
  width: 87.2%;
  margin-top: 12rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuggestedItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

export const SuggestionsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5.6rem;
  margin-top: 4rem;
`;

export const YouMayLike = styled(DetailsHeadLine)``;

export const SuggestionName = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.71px;
  color: #000;
`;

export const SeeProduct = styled.button`
  width: 16rem;
  height: 4.8rem;
  background-color: #d87d4a;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1px;
  color: #fff;
`;
