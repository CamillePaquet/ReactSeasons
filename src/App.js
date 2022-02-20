import Season from "./components/Season.js";
import Modal from "./components/Modal.js";
import "./App.css";
import logo from "./assets/seasons.svg";
import NextSeason from "./components/NextSeason.js";
import React, { useState, lazy, Suspense } from "react";

function App() {
  var today = new Date();

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <Season today={today}></Season>
      <Modal>
        <Suspense fallback={<div>Chargement...</div>}>
          {" "}
          <NextSeason today={today} />{" "}
        </Suspense>
      </Modal>
    </div>
  );
}

export default App;
