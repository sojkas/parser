import "./App.css";
import InputForm from "./components/InputForm";
import React, { useState } from "react";
import OutputList from "./components/OutpulList";
import StringOption from "./components/StringOption";

function App() {
  const [InputArray, setInputArray] = useState([]);
  const [selectedStringInput, setSelectedStringInput] = useState(/\r?\n/g);
  const [selectedStringOutput, setSelectedStringOutput] = useState(",");

  const onInputData = (inputData) => {
    setInputArray(inputData.split(selectedStringInput));
  };
  const onSelectedInputStringHandler = (selectedString) => {
    setSelectedStringInput(selectedString);
  }
  const onSelectedOutputStringHandler = (selectedString) => {
    setSelectedStringOutput(selectedString);
  }

  console.log("input string" + (selectedStringInput));

  return (
    <div className="application">
      <div className="input-window">
        <InputForm inputData={onInputData} />
        <StringOption selectedString={selectedStringInput} onSelectedString={onSelectedInputStringHandler}/>
      </div>
      <div className="output-window">
        <OutputList selectedString={selectedStringOutput} outputArray={InputArray} />
        <StringOption selectedString={selectedStringOutput} onSelectedString={onSelectedOutputStringHandler}/>
      </div>
    </div>
  );
}

export default App;
