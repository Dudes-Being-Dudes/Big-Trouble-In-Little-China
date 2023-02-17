import React from "react";

const ItemCard = ({ item }) => {
  console.log(item);
  return (
    <div
      key={item}
      className=" flex flex-col border h-auto w-auto gap-y-6 ml-2 items-center"
    >
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </div>
  );
  console.log("Item name test:", item);
};

export default ItemCard;
