import { Search } from "lucide-react";

export const SearchBar = () => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search for food, coffee, etc.."
      className="w-full bg-gray-800/50 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
    />
    <Search
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      size={20}
    />
  </div>
);
