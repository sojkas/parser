import OutputForm from "./OutputForm";

const OutputList = (props) => {
    console.log("outputlist"+props.outputArray);
  return (
    <div className="output-window">
      <OutputForm OutputString={props.outputArray.join(";")} />
      <OutputForm OutputString={props.outputArray.join("+")} />
      <OutputForm OutputString={props.outputArray.join(",")} />
      <OutputForm OutputString={props.outputArray.join("/")} />
    </div>
  );
};

export default OutputList;
