import React, { useState } from "react";

const CategoryMenu = ({ onCategoryMenuChange }) => {
  const [category, setCategory] = useState("Hot Dishes");
  const categories = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
  ];

  const handleCategoryMenu = (cat) => {
    setCategory(cat);
    onCategoryMenuChange(cat);
  };

  return (
    /**
     * hiển thị menu dựa theo categories
     * category nào được đánh dấu là standOut thì sẽ có style
     * khác biệt
     */
    <div className="flex gap-4">
      {categories.map((cat) => (
        <button
          onClick={() => handleCategoryMenu(cat)}
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
