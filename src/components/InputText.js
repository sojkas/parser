import React from "react";
import "./InputText.css";

const InputText = (props) =>{
    const onTextTypeHandler = (event) => {
        props.customText(event.target.value);
    }

    return (
        <div className="text-input__form">
            <input className="text-input__input" type="text" onChange={onTextTypeHandler} placeholder={props.customTextPlaceholder}/>
            <p className="text-input__label">{props.title}</p>            
        </div>
    )
}

export default InputText;