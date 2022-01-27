import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
    const checkboxChangeHandler = (event) => {
        props.isChecked(event.target.checked);
    }
  return (
    <label className="checkbox-all">
      <input type="checkbox" onChange={checkboxChangeHandler} />
      <p>{props.title}</p>
    </label>
  );
};

export default Checkbox;
