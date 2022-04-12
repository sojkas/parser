import React from "react";

const StringOption = (props) => {
  const selectString = (event) => {
    props.onSelectedString(event.target.value);
  };
  return (
    <div className="select-box">
      <label>Vyberte oddělovací znak:</label>
      <select value={props.selectedString} onChange={selectString}>
        <option value="&#10;">NewLine</option>
        <option value=",">,</option>
        <option value=";">;</option>
        <option value="|">|</option>
        <option value=" OR ">OR</option>
        <option value=" AND ">AND</option>
        <option value=" ">SPACE</option>
      </select>
      <div className="select-icon"></div>
    </div>
  );
};

export default StringOption;
