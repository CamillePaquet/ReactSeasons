import "./Button.css";

function Button(props) {
    return (<button className="Button" onClick={props.showModal}> {props.text} </button>);
}

export default Button;