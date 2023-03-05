import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useItems from "../hooks/useItems";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";
export default function SingleCategory() {
  const [prodId, setProdId] = useState("");
  const prodIds = useParams();
  const { categories, fetchCategories } = useCategories();
  const { items, fetchItems } = useItems();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    setProdId(+prodIds.categoryId);
  }, [prodIds]);

  const CategoryItems = items.filter((item) => {
    return item.category_id == prodId;
  });
  console.log("These are the prodIds", prodIds);
  return (
    <>
      <div className="md:mx-32 sm:mx-8">
        {" "}
        <FontAwesomeIcon
          onClick={async (e) => {
            navigate("/menu");
          }}
          icon={faArrowCircleLeft}
          className="absolute text-white text-3xl bg-phoRed rounded-full m-4 mr-4 cursor-pointer hover:bg-black"
        />
        {categories.map((category) => {
          if (category.id === prodId) {
            return (
              <div className="flex justify-center items-center flex-col bg-phoRed text-white text-2xl my-12 p-4 rounded-full">
                {category.name}
              </div>
            );
          }
        })}
      </div>{" "}
      <div className="flex">
        <section className="border ml-1 h-50 flex flex-col justify-center items-center">
          <h2 className="text-phoRed">Categories</h2>
          <Categories />
        </section>
        <section>
          <div className="grid grid-cols-1 border-y-2 md:grid-cols-3 lg:grid-cols-4  sm:mx-2">
            {CategoryItems.map((item) => {
              return (
                <div>
                  <ItemCard item={item} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
