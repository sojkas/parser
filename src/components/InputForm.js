import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const title = "Sem patří blok textu:";
  const parseButton = "Parsuj!";
  const deleteButton = "Smazat oblast vstupu";

  const [inputString, setInputString] = useState("");

  const inputTextSaveHandler = (event) => {
    setInputString(event.target.value);
  };

  const submitSaveHandler = (event) => {
    event.preventDefault();
    props.inputData(inputString);
  };
  const deleteHandler = () => {
    setInputString("");
  };

  return (
    <div className="input-window__form">
      <form onSubmit={submitSaveHandler}>
        <label className="input-window__label">{title}</label>
        <textarea
          className="area"
          value={inputString}
          onChange={inputTextSaveHandler}
        />
        <div className="input-window__actions">
          <button className="btn" type="submit">
            {parseButton}
          </button>
          <button className="btn" type="button" onClick={deleteHandler}>
            {deleteButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
