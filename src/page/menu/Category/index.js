import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
  refEqual,
  getDoc,
  doc,
} from "firebase/firestore";
import MenuCard from "../../../components/MenuCard";

const Category = ({ selectedCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "category"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const categoryList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCategoryList(categoryList);
    });
  }, []);

  return (
    <React.Fragment>
      {categoryList.map((item) => {
        return (
          <MenuCard
            key={item.id}
            data={item}
            onClick={(e) => {
              selectedCategory(e);
            }}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Category;
