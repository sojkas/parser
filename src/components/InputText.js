import React from "react";
import "./InputText.css";

const InputText = (props) =>{
    const onTextTypeHandler = (event) => {
        props.customText(event.target.value);
    }

    return (
        <div className="text-input__form">
            <input className="border rounded p-4 focus:border-2 focus:border-navy focus:p-[calc(1rem-1px)] placeholder:text-silvergrey" type="text" onChange={onTextTypeHandler} placeholder={props.customTextPlaceholder}/>
            <p className="text-xs p-1">{props.title}</p>            
        </div>
    )
}

export default InputText;