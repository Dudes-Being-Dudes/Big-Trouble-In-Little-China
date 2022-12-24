import useItems from "../hooks/useItems";
import { useEffect } from "react";
import MenuDropdown from "./MenuDropdown";

export default function Menu() {
  const { items, fetchItems } = useItems();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {/* {<MenuDropdown />} */}
      <div class="grid md:grid-cols-4 gap-6 md:grid-cols-2  ">
        {items.map((item) => {
          return (
            <div class=" flex flex-col border h-auto w-auto gap-y-6 ml-2 items-center">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {/* <img className="h-40 mt-0" src={item.imageUrl} /> */}
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
