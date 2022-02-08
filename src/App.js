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
  const [isCheckedRemoveQuotationMark, setIsCheckedRemoveQuotationMark] =
    useState(false);
  const [isCheckedAddQuotationMark, setIsCheckedAddQuotationMark] =
    useState(false);
  const titleRemoveQuatationMarks = "Odebrat uvozovky";
  const titleAddQuatationMarks = "Přídat do výstupu uvozovky";

  const onInputData = (inputData) => {
    setInputArray(inputData.split(selectedStringInput));
    if (isCheckedRemoveQuotationMark) return prepareDataRemove(InputArray);
    if (isCheckedAddQuotationMark) return prepareDataAdd(InputArray);
    setOutputArray(InputArray);
  };

  const onSelectedInputStringHandler = (selectedString) => {
    setSelectedStringInput(selectedString);
  };
  const onSelectedOutputStringHandler = (selectedString) => {
    setSelectedStringOutput(selectedString);
  };

  const isCheckedRemoveQuotationMarkHandler = (isChecked) => {
    setIsCheckedRemoveQuotationMark(isChecked);
    if (isChecked) setIsCheckedAddQuotationMark(!isChecked);
  };

  const isCheckedAddQuotationMarkHandler = (isChecked) => {
    setIsCheckedAddQuotationMark(isChecked);
    if (isChecked) setIsCheckedRemoveQuotationMark(!isChecked);
  };

  const prepareDataRemove = (outputArray) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = removeQuotationMarks(outputArray[element]);
      }

      setOutputArray(newOutputArray);
    }
  };

  const prepareDataAdd = (outputArray) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = addQuotationMarks(outputArray[element]);
      }

      setOutputArray(newOutputArray);
    }
  };

  const removeQuotationMarks = (chars) => {
    if (chars.length > 0) {
      const newChars = chars.replaceAll('"', "");
      return newChars;
    }
  };

  const addQuotationMarks = (chars) => {
    if (chars.length > 0) {
      const newChars = '"' + chars + '"';
      return newChars;
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
        <div className="action-buttons">
          {" "}
          <Checkbox
            title={titleRemoveQuatationMarks}
            isChecked={isCheckedRemoveQuotationMarkHandler}
            checked={isCheckedRemoveQuotationMark}
          />
          <Checkbox
            title={titleAddQuatationMarks}
            isChecked={isCheckedAddQuotationMarkHandler}
            checked={isCheckedAddQuotationMark}
          />
        </div>
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
