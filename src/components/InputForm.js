import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
    const[inputString, setInputString] = useState("");

    const inputTextSaveHandler = (event) => {
        setInputString(event.target.value);
    }

    const submitSaveHandler = (event) => {
        event.preventDefault();
        props.inputData(inputString);
    }
    const deleteHandler = () => {
        setInputString("");
    }

  return (
    <div>
      <form onSubmit={submitSaveHandler}>
        <label>Vloz text</label>
        <textarea value={inputString} onChange={inputTextSaveHandler} />      
      <button type="submit">Parsuj!</button>
      <button type="button" onClick={deleteHandler}>Smaz</button>
      </form>
    </div>
  );
};

export default InputForm;
