import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const title = "Sem patří blok textu:";
  /* const parseButton = "Parsuj!";
  const deleteButton = "Smazat oblast vstupu"; */

  const [inputString, setInputString] = useState("");

  const submitSaveHandler = (event) => {
    setInputString(event.target.value);
    event.preventDefault();
    props.inputData(inputString);
  };
  /* const deleteHandler = () => {
    setInputString("");
  }; */

  return (
    <div className="input-window__form">
        <p className="input-window__label">{title}</p>
        <textarea
          className="area"
          value={inputString}
          onChange={submitSaveHandler}
        />
        {/* <div className="input-window__actions">
          <button className="btn" type="submit">
            {parseButton}
          </button>
          <button className="btn" type="button" onClick={deleteHandler}>
            {deleteButton}
          </button>
        </div> */}
    </div>
  );
};

export default InputForm;
