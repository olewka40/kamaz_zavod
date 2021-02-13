import React from "react";
import styled from "styled-components";

export const Result = () => {
  return <ResultContainer>Result</ResultContainer>;
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 100%;
  background: bisque;
`;
