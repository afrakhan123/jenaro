import React from "react";

const Input = (props) => {
  const { error = "" } = props;
  const hasError =
    error !== ""
      ? "focus:text-red-700 focus:bg-white focus:outline-2 focus:outline-red-500 border-red-500"
      : "";
  return (
    <React.Fragment>
      <input
        className={`
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-md
        transition
        ease-in-out
        m-0
      
        focus:text-gray-700 focus:bg-white focus:outline-2 focus:outline-secondary-500
        ${hasError}
      `}
        {...props}
      />
      {error !== "" && (
        <label className="text-red-700 w-full mx-2 text-sm">
          &#8226; {error}
        </label>
      )}
    </React.Fragment>
  );
};

export default Input;
