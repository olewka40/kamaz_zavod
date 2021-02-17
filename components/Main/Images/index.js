import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";

export const Images = () => {
  const { image, frontImage, backImage, betweenImage } = useContext(
    DataContext
  );

  return (
    <ImagesContainer>
      {image !== "" && (
        <ImgTop src={`http://localhost:3000/api/files/${image}.png`} />
      )}
      {frontImage !== "" && (
        <ImgFront src={`http://localhost:3000/api/files/${frontImage}.png`} />
      )}
      {betweenImage !== "" && (
        <ImgMiddle
          src={`http://localhost:3000/api/files/${betweenImage}.png`}
        />
      )}
      {/*<ImgTop src={`http://localhost:3000/api/files/KH.png`} />*/}
      {/*<ImgFront src={`http://localhost:3000/api/files/TN34.png`} />*/}
      {/*<ImgMiddle src={`http://localhost:3000/api/files/OMP220.png`} />*/}
    </ImagesContainer>
  );
};

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  background-color: chartreuse;
`;
const ImgTop = styled.img``;
const ImgMiddle = styled.img`
  margin-top: 119px;
  width: 25px;
  margin-left: -205px;
  transform: rotate(341deg);
`;
const ImgFront = styled.img`
  margin-top: 102px;
  margin-left: -19px;
`;
