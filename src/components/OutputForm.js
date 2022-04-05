import React from "react";

const OutputForm = (props) => {
    

       return (
        <div className="text-area">
            <textarea className="text-area__area" value={props.OutputString} readOnly/>
            <label className="text-area__label">{props.outputTitle}</label>
        </div>
    )
}

export default OutputForm;