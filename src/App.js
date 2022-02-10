import Season from "./components/Season.js";
import "./App.css";
import React, { lazy, Suspense } from "react";

import logo from "../assets/seasons.svg";

function App() {
  var today = new Date();

  const Modal = lazy(() => import("./components/Modal"));

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <Season today={today}></Season>
      <Suspense fallback={<div>Chargement...</div>}>
        <Modal today={today}></Modal>
      </Suspense>
    </div>
  );
}

export default App;
