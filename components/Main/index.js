import React from "react";
import styled from "styled-components";
import { Constructor } from "./Constructor";
import { Images } from "./Images";
import { Result } from "./Result";

export const Main = () => {
  return (
    <MainContainer>
      <WorkSpace>
        <Constructor />
        <Images />
      </WorkSpace>
      <Result />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WorkSpace = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: cornflowerblue;
`;
