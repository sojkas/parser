import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    const checkboxChangeHandler = (event) => {
        props.isChecked(event.target.checked);
    }
  return (
    <label className="checkbox-all">
      <input className="checked:bg-gray-500" type="checkbox" checked={props.checked} onChange={checkboxChangeHandler} />
      <p className="">{props.title}</p>
    </label>
  );
};

export default Checkbox;
