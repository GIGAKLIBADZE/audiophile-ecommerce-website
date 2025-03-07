import styled from "styled-components";

export const DescriptionContainer = styled.div`
  width: 87.2%;
  margin-inline: auto;
  margin-top: 8.8rem;
`;

export const DetailsHeadLine = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.86px;
  color: #000;
`;

export const Features = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.67;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 2.4rem;
`;

export const BoxContainer = styled.div`
  margin-top: 8.8rem;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  margin-top: 2.4rem;
`;

export const ListItem = styled(Features)`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const ListItemAmount = styled(Features)`
  font-weight: bold;
  color: #d87d4a;
  margin-top: 0;
`;

export const Item = styled(Features)`
  margin-top: 0;
`;
