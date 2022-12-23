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
      <div class="grid lg:grid-cols-4 gap-6 md:grid-cols-2  flex-wrap justify-around ">
        {items.map((item) => {
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
