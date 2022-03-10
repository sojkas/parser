import React from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const title = "Sem patří blok textu:";

  const submitSaveHandler = (event) => {
    props.inputData(event.target.value);
  };
  const submitOnPasteSaveHandler = (event) => {
    props.inputData(event.clipboardData.getData('text'));
  }

  return (
    <div className="flex flex-column text-area">
      <label className="text-area__label">{title}</label>
      <textarea
        className="text-area__area"
        placeholder={props.inputFormPlaceholder}
        onChange={submitSaveHandler}
        onPaste={submitOnPasteSaveHandler}
      />
    </div>
  );
};

export default InputForm;
