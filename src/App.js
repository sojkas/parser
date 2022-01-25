import "./App.css";
import InputForm from "./components/InputForm";
import React, { useState } from "react";
import OutputList from "./components/OutpulList";

function App() {
  //const noOutputTitle = "Zatím nic.";

  //let Output = <div className="output-window">{noOutputTitle}</div>;
  const [InputArray, setInputArray] = useState([]);

  //const [isDataEntered, setIsDataEntered] = useState(false);

  const onInputData = (inputData) => {
    //setIsDataEntered(true);
    setInputArray(inputData.split(/\r?\n/g));
  };
  //if (isDataEntered) {
  let  Output = <OutputList outputArray={InputArray}/>;
  //}

  return (
    <div className="application">
      <div className="input-window">
        <InputForm inputData={onInputData} />
      </div>
      {Output}
    </div>
  );
}

export default App;
