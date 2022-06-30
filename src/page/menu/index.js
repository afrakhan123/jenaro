import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

import AddCategoryModal from "./AddCategoryModal";
import AddMenuModal from "./AddMenuModal";
import Category from "./Category";

const Menu = () => {
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const isMenuModalOpen = Object.keys(selectedCategory).length > 0;

  return (
    <div>
      <div className="flex flex-row ">
        {addCategoryModal && (
          <AddCategoryModal
            isOpen={addCategoryModal}
            setOpen={setAddCategoryModal}
          />
        )}
        {isMenuModalOpen && (
          <AddMenuModal
            isOpen={isMenuModalOpen}
            setOpen={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        )}

        <Button
          className="ml-auto mr-2"
          onClick={() => {
            setAddCategoryModal(true);
          }}
        >
          Add Category
        </Button>
        {/* <Button
          onClick={() => {
            setAddMenuModal(true);
          }}
        >
          Add Menu
        </Button> */}
      </div>
      <div className="mx-3 text-3xl font-bold font-display my-5">Add menu by category</div>
      <div className="flex flex-wrap flex-col items-center md:items-start md:flex-row">
        <Category
          selectedCategory={(e) => {
            setSelectedCategory(e);
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
