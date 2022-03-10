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
  const [multilineCheckboxDisabled, setMultilineCheckboxDisabled] =
    useState(true);

  const titleRemoveQuatationMarks = "Odebrat uvozovky";
  const titleAddQuatationMarks = "Přídat uvozovky";
  const titleSpace = "Otrimovat";
  const titleMultilines = "Multilines";
  const titleCustomText =
    "UPDATE table_name SET col1 = val1,... WHERE id in ({0}, {1}, {2},...);";
  const customTextFieldMessage =
    "Zde zadejte text, do ktereho budou dosazeny hodnoty.";
    const customTextFieldLabel =
    "Zde zadejte text, do ktereho budou dosazeny hodnoty.";
  const outputTitle = "A tady nalezneme sparsovaný blok:";
  /* const outputTextTitle = "A tady naleznete zadaná data ve Vašem textu:"; */
  const inputFormPlaceholder = "Např. 111, 222, 333, 444, atp.";

  const onInputData = (inputData) => {
    setInputData(inputData);
    setIsAnyChange(true);
  };

  const onSelectedInputStringHandler = (selectedString) => {
    setSelectedStringInput(selectedString);
    if (selectedString === "\n") {
      setMultilineCheckboxDisabled(true);
      setIsCheckedMultilines(false);
    } else {
      setMultilineCheckboxDisabled(false);
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
    <div className="flex flex-row w-full h-85vh">
      <div className="h-full w-1/2 pt-[50px] px-[10px]">
        <InputForm
          inputData={onInputData}
          inputFormPlaceholder={inputFormPlaceholder}
        />
        <div className="flex flex-row mt-4">
          <StringOption
            selectedString={selectedStringInput}
            onSelectedString={onSelectedInputStringHandler}
          />
          <div className="flex flex-row mt-4">
            <Checkbox
              title={titleRemoveQuatationMarks}
              isChecked={isCheckedRemoveQuotationMarkHandler}
              checked={isCheckedRemoveQuotationMark}
            />
            <Checkbox
              title={titleMultilines}
              isChecked={isCheckedMultilinesHandler}
              checked={isCheckedMultilines}
              disabled={multilineCheckboxDisabled}
            />
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 pt-[50px] px-[10px]">
        <OutputList
          selectedString={selectedStringOutput}
          outputArray={outputData}
          outputTitle={outputTitle}
        />
        <div className="flex flex-row mt-4">
          <StringOption
            selectedString={selectedStringOutput}
            onSelectedString={onSelectedOutputStringHandler}
          />
          <div className="flex flex-row mt-4">
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
        <InputText
          title={titleCustomText}
          customText={onSetCustomString}
          customTextPlaceholder={customTextFieldMessage}
          label={customTextFieldLabel}
        />
      </div>
    </div>
  );
}

export default App;
