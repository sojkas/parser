import React from "react";
import "./InputText.css";

const InputText = (props) =>{
    const onTextTypeHandler = (event) => {
        props.customText(event.target.value);
    }

    return (
        <div className="text-input__form">
            <p className="text-input__label">{props.title}</p>
            <input className="border" type="text" onChange={onTextTypeHandler} />
        </div>
    )
}

export default InputText;