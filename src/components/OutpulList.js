import OutputForm from "./OutputForm";

const OutputList = (props) => {
  const fillStringData = props.selectedString;

  return (
    <div>
      <OutputForm OutputString={props.outputArray.join(fillStringData)} />
    </div>
  );
};

export default OutputList;
