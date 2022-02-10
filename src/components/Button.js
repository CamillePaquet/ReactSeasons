import "./Button.css";
import React from "react";

function Button(props) {
  return (
    <button className="Button" onClick={props.showModal}>
      {" "}
      {props.text}{" "}
    </button>
  );
}

export default Button;
