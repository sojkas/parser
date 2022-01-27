import "./App.css";
import InputForm from "./components/InputForm";
import React, { useState } from "react";
import OutputList from "./components/OutpulList";
import StringOption from "./components/StringOption";
import Checkbox from "./components/Checkbox";

function App() {
  const [InputArray, setInputArray] = useState([]);
  const [outputArray, setOutputArray] = useState([]);
  const [selectedStringInput, setSelectedStringInput] = useState(/\r?\n/g);
  const [selectedStringOutput, setSelectedStringOutput] = useState(",");
  const titleRemoveQuatationMarks = "Odebrat uvozovky";

  const onInputData = (inputData) => {
    setInputArray(inputData.split(selectedStringInput));
    setOutputArray(inputData.split(selectedStringInput));
  };

  const onSelectedInputStringHandler = (selectedString) => {
    setSelectedStringInput(selectedString);
  };
  const onSelectedOutputStringHandler = (selectedString) => {
    setSelectedStringOutput(selectedString);
  };
  const isCheckedRemoveQuatationMark = (isChecked) => {
    if (isChecked) return prepareDataRemove(InputArray);
    setOutputArray(InputArray);
  };
  const prepareDataRemove = (outputArray) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = outputArray[element].slice(1, -1);
      }

      setOutputArray(newOutputArray);
    }
  };

  return (
    <div className="application">
      <div className="input-window">
        <InputForm inputData={onInputData} />

        <StringOption
          selectedString={selectedStringInput}
          onSelectedString={onSelectedInputStringHandler}
        />
        <Checkbox
          title={titleRemoveQuatationMarks}
          isChecked={isCheckedRemoveQuatationMark}
        />
      </div>
      <div className="output-window">
        <OutputList
          selectedString={selectedStringOutput}
          outputArray={outputArray}
        />
        <StringOption
          selectedString={selectedStringOutput}
          onSelectedString={onSelectedOutputStringHandler}
        />
      </div>
    </div>
  );
}

export default App;
