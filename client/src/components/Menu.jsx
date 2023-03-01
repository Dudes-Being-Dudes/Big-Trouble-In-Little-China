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
      <div className="flex md:mx-40 ">
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
      <div class="grid lg:grid-cols-5 md:grid-cols-4 gap-6 md:grid-cols-2 md:mx-32">
        {items.map((item) => {
          console.log("Items:", items);
          console.log("Single item:", item);

          return (
            <div
              id="card"
              class="flex flex-col h-auto w-auto gap-y-8 ml-2
               items-center bg-white text-gray-700 w-72 min-h-[10rem]
                shadow-md rounded-md overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src={item.imageUrl}
                alt="Imagine Food"
              />
              {/* tags add if statement for all the different tags */}
              <div className="flex items-center gap-2">
                {item.isSpicy === true ? (
                  <span class="px-3 py-1 rounded-full text-xs bg-red-100">
                    Spicy
                  </span>
                ) : null}
                {item.isGlutenFree === true ? (
                  <span class="px-3 py-1 rounded-full text-xs bg-gray-100">
                    Gluten Free
                  </span>
                ) : null}
                {item.isVegan === true ? (
                  <span class="px-3 py-1 rounded-full text-xs bg-green-100">
                    Vegan
                  </span>
                ) : null}
                {item.isVegetarian === true ? (
                  <span class="px-3 py-1 rounded-full text-xs bg-green-400">
                    Veg
                  </span>
                ) : null}
              </div>
              {/* product title */}
              <h4 className="font-semibold text-xl">{item.name}</h4>
              {/* <p>{item.description}</p> */}
              {/* product price */}
              <div>
                <span className="text-xl font-bold">${item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
