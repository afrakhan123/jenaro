import React from "react";
import DishIcon from "../../assets/images/dish-icon.svg";
const MenuCard = ({ onClick, data }) => {
  return (
    <div
      className="relative cursor-pointer group m-3"
      onClick={() => {
        onClick(data);
      }}
    >
      <img
        className="object-cover rounded-md w-52 h-40 opacity-50 group-hover:scale-110 transition-all group-hover:shadow-lg"
        src={data.imageUrl !== "" ? data.imageUrl : DishIcon}
      />
      <div className="absolute top-0 text-center w-full h-full flex flex-row items-center">
        <p className="w-full group-hover:hidden font-bold z-10 text-3xl tracking-wide font-sans subpixel-antialiased text-gray-800">
          {data.name}
        </p>
        <p className="w-full hidden group-hover:block font-bold font-sans z-10 text-2xl text-gray-800">
          {data.name} Menu
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
