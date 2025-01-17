import { useEffect } from "react";
import { SearchBar } from "../components/SearchBar";
import { MenuItem } from "../components/MenuItem";
import { CartItem } from "../components/CartItem";
import CategoryMenu from "../components/CategoryMenu";
import { useDrinks } from "../hooks/useDrinks";

export const HomePage = () => {
  const {
    categories = [],
    drinksByCategory,
    loading,
    error,
    loadCategories,
    loadDrinksByCategory,
  } = useDrinks();

  useEffect(() => {
    // Load categories when component mounts
    loadCategories();
  }, [loadCategories]);

  // Load first category's drinks when categories are loaded
  useEffect(() => {
    if (categories && categories.length > 0) {
      loadDrinksByCategory(categories[0]);
    }
  }, [categories, loadDrinksByCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr,400px] gap-8">
        <div>
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-2">De Trio</h1>
            <p className="text-gray-400">Tuesday, 14 Jan 2025</p>

            <div className="mt-4 mb-6">
              <SearchBar />
            </div>

            <CategoryMenu />
          </header>

          <div className="grid grid-cols-3 gap-6">
            {drinksByCategory?.map((drink) => (
              <MenuItem
                key={drink.id}
                image={drink.thumbnail}
                title={drink.name}
                price={drink.customization[0].price}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-rose-400 text-white py-2 rounded-lg">
              Stay
            </button>
            <button className="flex-1 text-gray-400 py-2 rounded-lg">
              To Go
            </button>
            <button className="flex-1 text-gray-400 py-2 rounded-lg">
              Delivery
            </button>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-medium">Orders #34562</h2>
              <select className="bg-gray-800 rounded px-2 py-1">
                <option>Stay</option>
              </select>
            </div>

            <CartItem
              title="Spicy seasoned seafood noodles"
              price="2.29"
              quantity={2}
              note="Please, just a little bit spicy only."
            />
          </div>

          <div className="mt-auto">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Sub total</span>
              <span className="text-white">$21.04</span>
            </div>
            <button className="w-full bg-rose-400 text-white py-3 rounded-lg">
              Continue to Payment hehe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
