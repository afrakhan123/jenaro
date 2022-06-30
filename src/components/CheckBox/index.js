import React from "react";

const CheckBox = (props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="rounded focus:outline-2 focus:outline-blue-500 cursor-pointer"
    />
  );
};

export default CheckBox;
