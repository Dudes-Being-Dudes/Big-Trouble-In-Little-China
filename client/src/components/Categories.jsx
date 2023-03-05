// import { useEffect } from "react";
// import { useStoreState, useStoreActions } from "easy-peasy";
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import useItems from "../hooks/useItems";
// import { useNavigate } from "react-router-dom";

// export default function Categories() {
//   const catIds = useParams();
//   const [catId, setCatId] = useState("");
//   const { items, fetchItems } = useItems();
//   const navigate = useNavigate();

//   const catDict = {
//     1: "Appetizers",
//     2: "Wonton, Noodle, Soup",
//     3: "Fried Rice",
//     4: "Chow Mein",
//     5: "Beef",
//     6: "Chicken",
//     7: "Vegetarian",
//     8: "Chop Suey",
//     9: "Pork",
//     10: "From the Sea",
//     11: "Combination Plate (Individual)",
//     12: "Chinese Dinner (Family Style)",
//     13: "Lunch Special",
//     14: "Beer",
//     15: "Drinks",
//     16: "Sides",
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   useEffect(() => {
//     setCatId(+catIds.categoryId);
//   }, [catIds]);

//   const catItems = items.filter((item) => {
//     return item.category_id == catId;
//   });

//   return (
//     <>
//       {/* <MenuDropdown /> */}
//       <h2 class="flex justify-center">{`${catDict[catId]}`} </h2>
//       <div class="grid lg:grid-cols-4 gap-6 md:grid-cols-2  flex-wrap justify-around ">
//         {catItems.map((item) => {
//           return (
//             <div class="rounded-lg border-solid border-2 border-slate-700 flex flex-col h-auto w-auto gap-y-6 ml-2 items-center">
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <img className="h-40 mt-0" src={item.imageUrl} />
//               <p>${item.price}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useItems from "../hooks/useItems";
import styles from "../styles/Categories.module.css";

export default function Categories() {
  const [prodId, setProdId] = useState("");
  const prodIds = useParams();
  const { categories, fetchCategories } = useCategories();
  const { items, fetchItems } = useItems();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setProdId(+prodIds.categoryId);
  }, [prodIds]);

  const CategoryItems = items.filter((item) => {
    return item.categoryId == prodId;
  });

  return (
    <>
      {" "}
      <div className="flex-col flex">
        <div className="flex flex-wrap p-2 items-center justify-center">
          {" "}
          {categories.map((category) => {
            return (
              <div className="flex justify-center flex-col mb-2 w-100">
                <button
                  href="#_"
                  class="relative px-6 overflow-hidden font-medium text-black-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  onClick={() => {
                    navigate(`/categories/${category.id}`);
                  }}
                >
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-red-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-red-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-200 delay-200 bg-red-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    {category.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
