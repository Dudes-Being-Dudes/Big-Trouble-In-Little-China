import useItems from "../hooks/useItems";
import { useEffect } from "react";
// import MenuDropdown from "./MenuDropdown";
import styles from "../styles/Menu.module.css";
import Categories from "./Categories";

export default function Menu() {
  const { items, fetchItems } = useItems();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="flex ">
        <Categories />
      </div>

      {/* <div id="menu_top_page">
        <h1 className="flex m-2 items-center justify-center">The Menu</h1>
        <div id="menu_bar" className={styles.menu_bar}>
          <a>Starters</a>
          <a>Soups</a>
          <a>Fried Rice</a>
          <a>Noodles</a>
          <a>Meat Dishes</a>
          <a>Vegetarian Dishes</a>
          <a>Chop Suey / Egg Foo Yung</a>
          <a>Seafood</a>
          <a>Combo Plates</a>
          <a>Family Dinner</a>
          <a>Drinks</a>
        </div>
      </div> */}
      <div class="grid md:grid-cols-4 gap-6 md:grid-cols-2 ">
        {items.map((item) => {
          console.log(items);
          return (
            <div class=" flex flex-col border h-auto w-auto gap-y-6 ml-2 items-center">
              <h3>{item.name}</h3>
              {/* <p>{item.description}</p> */}
              {/* <img className="h-40 mt-0" src={item.imageUrl} /> */}
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
