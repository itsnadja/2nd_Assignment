import React from "react";

export default function AddItem(props) {
  const { InputValue, onInputEvent, onClickEvent } = props;

  function handleInputEvent(event) {
    if (typeof onInputEvent === "function") onInputEvent(event.target.value);
  }
  function handleClick() {
    if (InputValue !== "") {
      if (typeof onClickEvent === "function") onClickEvent();
    }
  }
  return (
    <div className="add">
      <input type="text" value={InputValue} onChange={handleInputEvent} />
      <button className="btnAdd" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
