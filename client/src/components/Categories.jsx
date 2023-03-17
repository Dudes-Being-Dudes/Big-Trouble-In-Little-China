import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCategories from "../hooks/useCategory";
import useItems from "../hooks/useItems";

export default function Categories() {
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
    return item.categoryId == prodId;
  });

  return (
    <>
      {" "}
      <div className="flex-col flex">
        <div className="flex flex-wrap p-2 items-center justify-center">
          {" "}
          {categories.map((category) => {
            return (
              <div className="flex justify-center flex-col mb-2 w-100">
                <button
                  href="#_"
                  class="relative px-6 overflow-hidden font-medium text-black-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  onClick={() => {
                    navigate(`/categories/${category.id}`);
                  }}
                >
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-red-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-red-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-200 delay-200 bg-red-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    {category.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
