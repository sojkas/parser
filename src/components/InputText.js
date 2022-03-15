import React from "react";

const InputText = (props) => {
  const onTextTypeHandler = (event) => {
    props.customText(event.target.value);
  };

  return (
    <div className="text-input">
      <div className="text-input__part">
        <input
          className="text-input__input focus"
          type="text"
          onChange={onTextTypeHandler}
          placeholder={props.customTextPlaceholder}
        />
        <label className="label">{props.label}</label>
      </div>
      <p className="note">{props.title}</p>
    </div>
  );
};

export default InputText;
