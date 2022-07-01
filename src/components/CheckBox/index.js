import React from "react";

const CheckBox = (props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="rounded focus:outline-2 focus:outline-secondary-500 cursor-pointer color-secondary-500"
    />
  );
};

export default CheckBox;
