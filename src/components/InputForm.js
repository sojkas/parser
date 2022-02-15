import React from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const title = "Sem patří blok textu:";
  /* const parseButton = "Parsuj!";
  const deleteButton = "Smazat oblast vstupu"; */

  const submitSaveHandler = (event) => {
    props.inputData(event.target.value);
  };
  const submitOnPasteSaveHandler = (event) => {
    props.inputData(event.clipboardData.getData('text'));
  }

  return (
    <div className="input-window__form">
      <p className="input-window__label">{title}</p>
      <textarea
        className="area border"
        onChange={submitSaveHandler}
        onPaste={submitOnPasteSaveHandler}
      />
    </div>
  );
};

export default InputForm;
