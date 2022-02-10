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
  const [isCheckedRemoveSpace, setIsCheckedRemoveSpace] = useState(false);
  const [isAnyChange, setIsAnyChange] = useState(false);

  const titleRemoveQuatationMarks = "Odebrat uvozovky";
  const titleAddQuatationMarks = "Přídat uvozovky";
  const titleSpace = "Odebrat mezery";

  const onInputData = (inputData) => {
    setInputArray(inputData.split(selectedStringInput));
    setIsAnyChange(true);
  };

  const onSelectedInputStringHandler = (selectedString) => {
    setSelectedStringInput(selectedString);
    setIsAnyChange(true);
  };
  const onSelectedOutputStringHandler = (selectedString) => {
    setSelectedStringOutput(selectedString);
    setIsAnyChange(true);
  };

  const isCheckedRemoveQuotationMarkHandler = (isChecked) => {
    setIsCheckedRemoveQuotationMark(isChecked);
    if (isChecked) setIsCheckedAddQuotationMark(!isChecked);
    setIsAnyChange(true);
  };

  const isCheckedAddQuotationMarkHandler = (isChecked) => {
    setIsCheckedAddQuotationMark(isChecked);
    if (isChecked) setIsCheckedRemoveQuotationMark(!isChecked);
    setIsAnyChange(true);
  };

  const isCheckedRemoveSpaceHandler = (isChecked) => {
    setIsCheckedRemoveSpace(isChecked);
    setIsAnyChange(true);
  };

  const prepareDataTrim = (outputArray) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = outputArray[element].trim();
      }
      return newOutputArray;
    }
    return outputArray;
  }

  const prepareDataRemove = (outputArray, removeChar) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = removeSelectedChar(
          outputArray[element],
          removeChar
        );
      }
      return newOutputArray;
    }
    return outputArray;
  };

  const prepareDataAdd = (outputArray) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = addQuotationMarks(outputArray[element]);
      }
      return newOutputArray;
    }
    return outputArray;
  };

  const removeSelectedChar = (chars, selectedChar) => {
    if (chars.length > 0) {
      const newChars = chars.replaceAll(selectedChar, "");
      return newChars;
    }
  };

  const addQuotationMarks = (chars) => {
    if (chars.length > 0) {
      const newChars = '"' + chars + '"';
      return newChars;
    }
  };

  if (isAnyChange) {
    setIsAnyChange(false);
    let newArray = InputArray;
    if (isCheckedRemoveSpace) newArray = prepareDataTrim(newArray);
    if (isCheckedRemoveQuotationMark)
      newArray = prepareDataRemove(newArray, '"');
    if (isCheckedAddQuotationMark) newArray = prepareDataAdd(newArray);

    setOutputArray(newArray);
  }

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
          isChecked={isCheckedRemoveQuotationMarkHandler}
          checked={isCheckedRemoveQuotationMark}
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
        <div className="action-buttons">
          <Checkbox
            title={titleAddQuatationMarks}
            isChecked={isCheckedAddQuotationMarkHandler}
            checked={isCheckedAddQuotationMark}
          />
          <Checkbox
            title={titleSpace}
            isChecked={isCheckedRemoveSpaceHandler}
            checked={isCheckedRemoveSpace}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
