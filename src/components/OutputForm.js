import React from "react";
import "./OutputForm.css";

const OutputForm = (props) => {
    

       return (
        <div className="input-window__form text-area">
            <label className="text-area__label">{props.outputTitle}</label>
            <textarea className="text-area__area border" value={props.OutputString} readOnly/>
        </div>
    )
}

export default OutputForm;