import useItems from "../hooks/useItems";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faPepperHot,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
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
                  <FontAwesomeIcon
                    icon={faPepperHot}
                    className="text-red-700 px-2 py-2 rounded-full"
                    title="spicy"
                  />
                ) : null}
                {item.isGlutenFree === true ? (
                  <span
                    class="px-1 py-1 rounded-full bg-gray-100"
                    title="gluten free"
                  >
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
