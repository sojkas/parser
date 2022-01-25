import React from "react";
import "./OutputForm.css";

const OutputForm = (props) => {
       return (
        <div className="output-window__item">
            <textarea className="area" value={props.OutputString} readOnly/>
        </div>
    )
}

export default OutputForm;