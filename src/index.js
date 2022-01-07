import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CurrencyContext from "./context/CurrencyContext";

ReactDOM.render(
  <React.StrictMode>
    <CurrencyContext>
      <App />
    </CurrencyContext>
  </React.StrictMode>,
  document.getElementById("root")
);
