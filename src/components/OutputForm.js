import React from "react";
import "./OutputForm.css";

const OutputForm = (props) => {
       return (
        <div>
            <textarea value={props.OutputString} readOnly/>
        </div>
    )
}

export default OutputForm;