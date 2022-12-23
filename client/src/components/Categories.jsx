import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useItems from "../hooks/useItems";
import { useNavigate } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

export default function Categories() {
  const catIds = useParams();
  const [catId, setCatId] = useState("");
  const { items, fetchItems } = useItems();
  const navigate = useNavigate();

  const catDict = {
    1: "Appetizers",
    2: "Wonton, Noodle, Soup",
    3: "Fried Rice",
    4: "Chow Mein",
    5: "Beef",
    6: "Chicken",
    7: "Vegetarian",
    8: "Chop Suey",
    9: "Pork",
    10: "From the Sea",
    11: "Combination Plate (Individual)",
    12: "Chinese Dinner (Family Style)",
    13: "Lunch Special",
    14: "Beer",
    15: "Drinks",
    16: "Sides",
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setCatId(+catIds.categoryId);
  }, [catIds]);

  const catItems = items.filter((item) => {
    return item.category_id == catId;
  });

  return (
    <>
      {/* <MenuDropdown /> */}
      <h2 class="flex justify-center">{`${catDict[catId]}`} </h2>
      <div class="grid lg:grid-cols-4 gap-6 md:grid-cols-2  flex-wrap justify-around ">
        {catItems.map((item) => {
          return (
            <div class="rounded-lg border-solid border-2 border-slate-700 flex flex-col h-auto w-auto gap-y-6 ml-2 items-center">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <img className="h-40 mt-0" src={item.imageUrl} />
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
