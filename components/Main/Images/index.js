import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

export const Images = () => {
  const { image } = useContext(DataContext);

  return (
    <ImagesContainer>
      <img src={`http://localhost:3000/api/files/${image}.png`} />
    </ImagesContainer>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 55%;
  background-color: chartreuse;
`;
