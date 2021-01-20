import "./App.css";
import React from "react";

const App = (props) => {
  return <button className={props.type}>{props.value}</button>;
};

export default App;
