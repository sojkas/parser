import React from "react";
import "./InputText.css";

const InputText = (props) =>{
    const onTextTypeHandler = (event) => {
        props.customText(event.target.value);
    }

    return (
        <div className="text-input__form">
            <input className="text-input__input input-setting focus" type="text" onChange={onTextTypeHandler} placeholder={props.customTextPlaceholder}/>
            <label className="text-input__label">{props.label}</label>
            <p className="text-xs p-1 text-input__note">{props.title}</p>            
        </div>
    )
}

export default InputText;