import React from "react";

const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={` text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus:outline-none dark:focus:ring-secondary-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
