import Season from "./components/Season.js";
import "./App.css";

import Modal from "./components/Modal.js";

import logo from "../assets/seasons.svg";

function App() {
  var today = new Date();

  /* ajouter lazy loading
mettre bouton dans modal */

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <Season today={today}></Season>
      <Modal today={today}></Modal>
    </div>
  );
}

export default App;
