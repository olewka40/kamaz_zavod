import React from "react";
import styled from "styled-components";

export const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

  width: 100%;
  height: 64px;
  background-color: coral;
`;
