import React from "react";

const ItemCard = ({ item }) => {
  console.log(item);
  return (
    <div
      key={item}
      className=" flex flex-col shadow-md h-auto w-auto gap-y-6 ml-2 my-2 items-center"
    >
      <img src={item.imageUrl} alt="No Picture Available" />
      <h3 className="text-phoRed">{item.name}</h3>
      <p className="mx-4">{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
};

export default ItemCard;
