import OutputForm from "./OutputForm";
import React from "react";

const OutputList = (props) => {
  
  return (
    <div>
      <OutputForm OutputString={props.outputArray} />
    </div>
  );
};

export default OutputList;
