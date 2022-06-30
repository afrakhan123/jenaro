import React from "react";

const Input = (props) => {
  return (
    <input
      className="
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
        focus:text-gray-700 focus:bg-white focus:outline-2 focus:outline-blue-500
      "
     {
        ...props
     }
    />
  );
};

export default Input;
