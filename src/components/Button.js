import "./Button.css";

function Button(props) {
    return (<button className="Button" onClick={props.showModal}> Et après ? </button>);
}

export default Button;