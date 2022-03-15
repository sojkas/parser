import React from "react";

const OutputForm = (props) => {
    

       return (
        <div className="text-area">
            <label className="text-area__label">{props.outputTitle}</label>
            <textarea className="text-area__area" value={props.OutputString} readOnly/>
        </div>
    )
}

export default OutputForm;