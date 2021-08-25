import React from "react";
import "./App.css";
import Clock from "./components/Common/Clock";
import GlobalStyle from "./components/Common/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Clock />
      <TodoTemplate></TodoTemplate>
    </>
  );
}

export default App;
