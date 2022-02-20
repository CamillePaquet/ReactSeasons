import React, { useState, lazy, Suspense } from "react";
import "./Modal.css";

const seasons = [
  { id: "Hiver", fin: "19/3/2022", debut: "21/12/2021" },
  { id: "Printemps", fin: "20/6/2022", debut: "20/3/2022" },
  { id: "Ete", fin: "22/11/2022", debut: "21/6/2022" },
  { id: "Automne", fin: "20/12/2022", debut: "23/9/2022" },
];

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
