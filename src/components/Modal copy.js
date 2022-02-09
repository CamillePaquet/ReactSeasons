import { createPortal } from "react-dom";

import "./Modal.css";

const node = document.getElementById("modal");

function Modal(props) {
  return createPortal(<div className="Modal">{props.children}</div>, node);
}
export default Modal;
