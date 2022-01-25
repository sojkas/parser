import "./App.css";
import InputForm from "./components/InputForm";
import React, { useState } from "react";
import OutputList from "./components/OutpulList";

function App() {
  let Output = <div>Zatim nic.</div>;
  const [InputArray, setInputArray] = useState([]);

  const [isDataEntered, setIsDataEntered] = useState(false);

  const onInputData = (inputData) => {
    setIsDataEntered(true);
    setInputArray(inputData.split(" "));
    console.log("pridana hodnota " + inputData);
    console.log("policko " + InputArray);
  };
  if (isDataEntered) {
    Output = <OutputList outputArray={InputArray}/>;
  }

  return (
    <div className="application">
      <div className="input-window">
        Tady budou vstupy
        <InputForm inputData={onInputData} />
      </div>
      {Output}
    </div>
  );
}

export default App;
