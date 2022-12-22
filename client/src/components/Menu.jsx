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
      {<MenuDropdown />}
      <div>
        {" "}
        All Items
        {items.map((item) => {
          return (
            <div>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
