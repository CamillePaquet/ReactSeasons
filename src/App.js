import Season from "./components/Season.js";
import Modal from "./components/Modal.js";
import "./App.css";

import NextSeason from "./components/NextSeason.js";
import React, { useState, lazy, Suspense } from "react";

function App() {
  const NextSeason = lazy(() => import("./components/NextSeason"));
  var today = new Date();

  return (
    <div className="App">
      <Season today={today} data-testid="season"></Season>
      <Modal data-testid="modal">
        <Suspense fallback={<div>Chargement...</div>}>
          <NextSeason today={today} />
        </Suspense>
      </Modal>
    </div>
  );
}

export default App;
