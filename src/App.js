import "./App.css";
import InputForm from "./components/InputForm";
import React, { useState } from "react";
import OutputList from "./components/OutpulList";
import StringOption from "./components/StringOption";
import Checkbox from "./components/Checkbox";
import InputText from "./components/InputText";

function App() {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [customString, setCustomString] = useState("");
  /* const [outputDataWithString, setOutputDataWithString] = useState(""); */
  const [selectedStringInput, setSelectedStringInput] = useState(/\r?\n/g);
  const [selectedStringOutput, setSelectedStringOutput] = useState(",");
  const [isCheckedRemoveQuotationMark, setIsCheckedRemoveQuotationMark] =
    useState(false);
  const [isCheckedAddQuotationMark, setIsCheckedAddQuotationMark] =
    useState(false);
  const [isCheckedRemoveSpace, setIsCheckedRemoveSpace] = useState(false);
  const [isCheckedMultilines, setIsCheckedMultilines] = useState(false);
  const [isAnyChange, setIsAnyChange] = useState(false);
  const [disabled, setIsDisabled] = useState(true);

  const titleRemoveQuatationMarks = "Odebrat uvozovky";
  const titleAddQuatationMarks = "Přídat uvozovky";
  const titleSpace = "Otrimovat";
  const titleMultilines = "Multilines";
  const titleCustomText = "Zadejte text:";
  const customTextFieldMessage =
    "UPDATE table_name SET col1 = val1,... WHERE id in ({0}, {1}, {2},...);";
  const outputTitle = "A tady nalezneme sparsovaný blok:";
  /* const outputTextTitle = "A tady naleznete zadaná data ve Vašem textu:"; */

  const onInputData = (inputData) => {
    setInputData(inputData);
    setIsAnyChange(true);
  };

  const onSelectedInputStringHandler = (selectedString) => {
    setSelectedStringInput(selectedString);
    if (selectedString === "\n") {
      setIsDisabled(true);
      setIsCheckedMultilines(false);
    } else {
      setIsDisabled(false);
    }
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

  const isCheckedMultilinesHandler = (isChecked) => {
    setIsCheckedMultilines(isChecked);
    setIsAnyChange(true);
  };

  const onSetCustomString = (customText) => {
    setCustomString(customText);
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
  };

  const prepareDataReplace = (outputArray, oldChar, newChar) => {
    if (outputArray.length > 0) {
      const newOutputArray = new Array([]);
      for (const element in outputArray) {
        newOutputArray[element] = replaceSelectedChar(
          outputArray[element],
          oldChar,
          newChar
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

  const replaceSelectedChar = (chars, selectedChar, newSelectedChar) => {
    if (chars.length > 0) {
      const newChars = chars.replaceAll(selectedChar, newSelectedChar);
      return newChars;
    }
  };

  const addQuotationMarks = (chars) => {
    if (chars.length > 0) {
      const newChars = '"' + chars + '"';
      return newChars;
    }
  };

  if (inputData.length > 0) {
    if (isAnyChange) {
      setIsAnyChange(false);
      if (isCheckedMultilines) {
        let newDataArray = inputData.split("\n");
        let customStringDataArray = [];
        for (const element in newDataArray) {
          let newArray = newDataArray[element].split(selectedStringInput);
          if (isCheckedRemoveQuotationMark)
            newArray = prepareDataReplace(newArray, '"', "");
          if (isCheckedRemoveSpace) newArray = prepareDataTrim(newArray);
          if (isCheckedAddQuotationMark) newArray = prepareDataAdd(newArray);
          const newData = newArray.join(selectedStringOutput);
          newDataArray[element] = newData;
          if (customString.length > 0) {
            let customStringData = customString;
            for (const a in newArray) {
              customStringData = customStringData.replaceAll(
                "{" + a + "}",
                newArray[a]
              );
            }
            customStringDataArray[element] = customStringData;
          }
          if (customString.length > 0) {
            setOutputData(customStringDataArray.join("\n"));
          } else {
            setOutputData(newDataArray.join("\n"));
          }
          /* setOutputDataWithString(customStringDataArray.join("\n")); */
        }
      } else {
        let newArray = inputData.split(selectedStringInput);
        let customStringData = customString;
        if (isCheckedRemoveQuotationMark)
          newArray = prepareDataReplace(newArray, '"', "");
        if (isCheckedRemoveSpace) newArray = prepareDataTrim(newArray);
        if (isCheckedAddQuotationMark) newArray = prepareDataAdd(newArray);
        if (customString.length > 0) {
          for (const a in newArray) {
            customStringData = customStringData.replaceAll(
              "{" + a + "}",
              newArray[a]
            );
          }
        }
        if (customString.length > 0) {
          setOutputData(customStringData);
        } else {
          setOutputData(newArray.join(selectedStringOutput));
        }
      }
    }
  }

  return (
    <div className="application">
      <div className="input-window">
        <InputForm inputData={onInputData} />
        <StringOption
          selectedString={selectedStringInput}
          onSelectedString={onSelectedInputStringHandler}
        />
        <div className="action-buttons">
          <Checkbox
            title={titleRemoveQuatationMarks}
            isChecked={isCheckedRemoveQuotationMarkHandler}
            checked={isCheckedRemoveQuotationMark}
          />
          <Checkbox
            title={titleMultilines}
            isChecked={isCheckedMultilinesHandler}
            checked={isCheckedMultilines}
            disabled={disabled}
          />
        </div>
      </div>
      <div className="output-window">
        <OutputList
          selectedString={selectedStringOutput}
          outputArray={outputData}
          outputTitle={outputTitle}
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
        <InputText
          title={titleCustomText}
          customText={onSetCustomString}
          customTextPlaceholder={customTextFieldMessage}
        />
        {/* <OutputList
          selectedString={selectedStringOutput}
          outputArray={outputDataWithString}
          outputTitle={outputTextTitle}
        /> */}
      </div>
    </div>
  );
}

export default App;
