
import Season from './components/Season.js';
import './App.css'
import Modal from './components/Modal.js';
import { useState } from "react";
import logo from '../assets/seasons.svg';


function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false);

    var today = new Date();

    function showModal() {
        setModalIsVisible(!modalIsVisible);
    }



    return (
        <div className="App">
            <img src={logo} alt="" />
            { (modalIsVisible) ? <Modal today={today}></Modal> : <Season today={today} showModal={showModal} ></Season>}
     
        </div>
    );
}

export default App;