import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useItems from "../hooks/useItems";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
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
      <div>
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
              <div className="flex justify-center items-center flex-col bg-phoRed text-white text-2xl my-12 p-4">
                {category.name}
              </div>
            );
          }
        })}
      </div>
      <section>
        <div>
          {CategoryItems.map((item) => {
            return (
              <div>
                <ItemCard item={item} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
