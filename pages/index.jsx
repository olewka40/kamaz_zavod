import React, { useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import axios from "axios";

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;  
    background-color: #bababa;
    display: flex;
    justify-content: center;
  }
  #root{
    height: 100%;
    width: 80%;   
    background-color: white;

  }
`;

const App = () => {
  const [image, setImage] = useState("");
  const [frontImage, setFrontImage] = useState("");
  const [betweenImage, setBetweenImage] = useState("");
  const [sideImage, setSideImage] = useState("");
  const [backImage, setBackImage] = useState("");

  const [topResult, setTopResult] = useState("");
  const [centerResult, setCenterResult] = useState("");
  const [frontResult, setFrontResult] = useState("");

  const [eur, setEur] = useState("");
  const [usd, setUsd] = useState("");
  const getCourses = async () => {
    const { data } = await axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    setEur(data.Valute.EUR.Previous);
    setUsd(data.Valute.USD.Previous);
  };
  useEffect(() => {
    getCourses().then(r => r);
  }, []);

  return (
    <DataContext.Provider
      value={{
        image,
        setImage,
        frontImage,
        setFrontImage,
        betweenImage,
        setBetweenImage,
        sideImage,
        setSideImage,
        backImage,
        setBackImage,
        topResult,
        setTopResult,
        centerResult,
        setCenterResult,
        frontResult,
        setFrontResult
      }}
    >
      <MainComponent>
        <GlobalStyle />
        <Header />
        <Main />
      </MainComponent>
    </DataContext.Provider>
  );
};
export default App;
