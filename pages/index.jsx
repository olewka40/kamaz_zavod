import React, { useState } from "react";
import { DataContext } from "../context/DataContext";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

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
  return (
    <DataContext.Provider value={{ image, setImage }}>
      <MainComponent>
        <GlobalStyle />
        <Header />
        <Main />
      </MainComponent>
    </DataContext.Provider>
  );
};
export default App;
