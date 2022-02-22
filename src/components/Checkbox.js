import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    const checkboxChangeHandler = (event) => {
        props.isChecked(event.target.checked);
    }
  return (
    <label className="checkbox-all" disabled={props.disabled}>
      <input type="checkbox" checked={props.checked} onChange={checkboxChangeHandler} disabled={props.disabled}/>
      <span className="checkbox-all__span"></span>
      <p className="">{props.title}</p>
    </label>
  );
};

export default Checkbox;
