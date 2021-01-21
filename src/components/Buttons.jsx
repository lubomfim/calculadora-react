import "./Buttons.css";
import React from "react";

const Buttons = (props) => {
  return (
    <button className={props.type} onClick={e => props.click && props.click(props.value)}>{props.value}</button>
  )
};

export default Buttons;
