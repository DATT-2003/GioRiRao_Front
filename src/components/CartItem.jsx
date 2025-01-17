import { ShoppingBag } from "lucide-react";

export const CartItem = ({ image, title, price, quantity, note }) => (
  <div className="flex items-center gap-4 mb-4">
    <img
      src={image || "/api/placeholder/50/50"}
      alt={title}
      className="w-12 h-12 rounded-lg object-cover"
    />
    <div className="flex-1">
      <h4 className="text-white">{title}</h4>
      <p className="text-gray-400">${price}</p>
      {note && <p className="text-gray-500 text-sm">{note}</p>}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-white">{quantity}</span>
      <button className="text-rose-400 p-2 rounded hover:bg-gray-800">
        <ShoppingBag size={16} />
      </button>
    </div>
  </div>
);
