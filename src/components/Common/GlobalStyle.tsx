import React, { FunctionComponent } from "react";
import { css, Global } from "@emotion/react";

const defaultStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Gowun Batang", serif;
  }

  html,
  body {
    height: 100%;
    background-color: #222831;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
`;

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
