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
    <div className="input-window__form text-area">
      <label className="input-window__label text-area__label">{title}</label>
      <textarea
        className="text-area__area border"
        placeholder={props.inputFormPlaceholder}
        onChange={submitSaveHandler}
        onPaste={submitOnPasteSaveHandler}
      />
    </div>
  );
};

export default InputForm;
