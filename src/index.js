import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Courier New", Courier, monospace;
    color: #1f1f1f;
    margin: 0 15px 30px;

    @media(min-width: 48em) {
      margin: 0 30px 60px;
    }
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById("root")
);
