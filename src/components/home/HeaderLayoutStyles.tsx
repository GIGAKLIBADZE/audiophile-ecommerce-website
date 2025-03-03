import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 2.4rem;
  background-color: #191919;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #fff;
    opacity: 0.1;
  }
`;
