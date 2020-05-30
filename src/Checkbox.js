import React from "react";

export default function Checkbox(props) {
  const { onCheckEvent, checked, label } = props;
  function handleCheckEvent(event) {
    if (typeof onCheckEvent === "function") onCheckEvent(event.target.checked);
  }
  return (
    <span>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckEvent}
        label={label}
      />
    </span>
  );
}
