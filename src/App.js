
import Season from './components/Season.js';
import './App.css'
import Modal from './components/Modal.js';
import { useState } from "react";


function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false);

    var today = new Date();

    function showModal() {
        setModalIsVisible(!modalIsVisible);
    }



    return (
        <div className="App">
            <img src="./assets/seasons.svg" alt="" />
            { (modalIsVisible) ? <Modal today={today}></Modal> : <Season today={today} showModal={showModal} ></Season>}
     
        </div>
    );
}

export default App;