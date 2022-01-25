import OutputForm from "./OutputForm";

const OutputList = (props) => {
    const items = [
        {key: 1, item: ","},
        {key: 2, item: ";"},
        {key: 3, item: "-"},
        {key: 4, item: "/"},
        
    ];
    const outputTitle = "A tady nalezneme sparsovaný blok:"

  return (
    <div className="output-window">
        <label>{outputTitle}</label>
        {items.map((item)=> (
            <OutputForm key={item.key} OutputString={props.outputArray.join(item.item)} />
        ))}
    </div>
  );
};

export default OutputList;
