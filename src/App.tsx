import React from "react";
import "./App.css";
import GlobalStyle from "./components/Common/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate></TodoTemplate>
    </>
  );
}

export default App;
