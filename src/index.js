import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App";

ReactDOM.render(
  <div className="calculadora">
    <App value="/" type="symbol" />
    <App value="*" type="symbol" />
    <App value="-" type="symbol" />
    <App value="+" type="symbol" />

    <App value="7" type="number" />
    <App value="8" type="number" />
    <App value="9" type="number" />
    <App value="=" type="result" />

    <App value="4" type="number" />
    <App value="5" type="number" />
    <App value="6" type="number" />

    <App value="3" type="number" />
    <App value="2" type="number" />
    <App value="1" type="number" />

    <App value="0" type="number zero" />
  </div>,
  document.getElementById("root")
);
