import OutputForm from "./OutputForm";

const OutputList = (props) => {
  return (
    <div className="output-window">
      <OutputForm OutputString={props.outputArray.join(",")} />
    </div>
  );
};

export default OutputList;
