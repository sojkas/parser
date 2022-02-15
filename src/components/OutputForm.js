import React from "react";
import "./OutputForm.css";

const OutputForm = (props) => {
    

       return (
        <div className="input-window__form">
            <p>{props.outputTitle}</p>
            <textarea className="area border" value={props.OutputString} readOnly/>
        </div>
    )
}

export default OutputForm;