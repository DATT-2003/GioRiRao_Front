import React, { useState } from "react";
import { useDrinks } from "../hooks/useDrinks";

const CategoryMenu = () => {
  const { categories = [], loadDrinksByCategory } = useDrinks(); // Provide default empty array
  const [category, setCategory] = useState("coffee");

  const handleCategoryClick = (category) => {
    const cate = category;
    setCategory(cate);
    console.log("category", category);
    loadDrinksByCategory(category);
  };

  return (
    <div className="flex gap-4">
      {categories.map((cat) => (
        <button
          onClick={() => {
            handleCategoryClick(cat);
          }}
          key={cat}
          className={`px-4 py-2 rounded-lg ${
            cat === category ? "bg-rose-400 text-white" : "text-gray-400"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu;
