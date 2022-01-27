import React from "react";
import "./OutputForm.css";

const OutputForm = (props) => {
    const outputTitle = "A tady nalezneme sparsovaný blok:"

       return (
        <div className="output-window__item">
            <p>{outputTitle}</p>
            <textarea className="area" value={props.OutputString} readOnly/>
        </div>
    )
}

export default OutputForm;