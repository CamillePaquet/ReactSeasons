import React, { useState, lazy, Suspense } from "react";
import "./Modal.css";

import seasons from "../seasons.json";

function Modal(props, children) {
  const today = props.today;
  const [isVisible, setIsVisible] = useState(false);

  const NextSeason = lazy(() => import("./NextSeason"));

  function setVisibility() {
    setIsVisible(!isVisible);
  }

  return !isVisible ? (
    <button className="Button-modal" onClick={setVisibility}>
      {" "}
      Et après ?{" "}
    </button>
  ) : (
    <div className="containerNextSeason">
      <div>{props.children}</div>

      <button className="Button-modal" onClick={setVisibility}>
        Ok, je vais être patient !
      </button>
    </div>
  );
}

export default Modal;
