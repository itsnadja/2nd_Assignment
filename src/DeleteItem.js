import React from "react";

export default function DeleteItem(props) {
  const { onClickEvent } = props;

  function handleClick() {
    if (typeof onClickEvent === "function") onClickEvent();
  }

  return (
    <span>
      <button className="btnDelete" onClick={handleClick}>
        X
      </button>
    </span>
  );
}
