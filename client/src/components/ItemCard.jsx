import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPepperHot,
  faSeedling,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ item }) => {
  console.log(item);
  return (
    <div
      key={item}
      className=" flex flex-col shadow-md h-auto w-auto gap-y-6 ml-2 my-2 items-center"
    >
      <img src={item.imageUrl} alt="" />
      <div className="flex items-center gap-2">
        {item.isSpicy === true ? (
          <FontAwesomeIcon
            icon={faPepperHot}
            className="text-red-700 px-2 py-2 rounded-full"
            title="spicy"
          />
        ) : null}
        {item.isGlutenFree === true ? (
          <span class="px-1 py-1 rounded-full bg-gray-100" title="gluten free">
            GF
          </span>
        ) : null}
        {item.isVegan === true ? (
          <FontAwesomeIcon
            icon={faSeedling}
            className="px-2 py-2 rounded-full bg-green-100 text-emerald-600"
            title="vegan"
          />
        ) : null}
        {item.isVegetarian === true ? (
          <FontAwesomeIcon
            icon={faLeaf}
            className="px-2 py-2 rounded-full  text-green-400"
            title="vegetarian"
          />
        ) : null}
        {item.isNut === true ? (
          <FontAwesomeIcon
            icon={faBrain}
            className="px-2 py-2 rounded-full text-[#c6952b]"
            title="contains nut"
          />
        ) : null}
      </div>
      <h3 className="text-phoRed">{item.name}</h3>
      <p className="mx-4">{item.description}</p>
      {/* <p>${item.price}</p> */}
    </div>
  );
};

export default ItemCard;
