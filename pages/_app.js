import App from "next/app";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { withRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles/";

axios.defaults.baseURL = "http://192.168.1.102:3000/";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    width: 100%;
    
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0074C6"
    }
  }
});

class Telegramm extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withRouter(Telegramm);
