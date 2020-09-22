import React from "react";

function CommonRadioBtn({
  id,
  name,
  value,
  checked,
  htmlfor,
  labelVal,
  onChange,
}) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={htmlfor}>{labelVal}</label>
    </div>
  );
}

export default CommonRadioBtn;
