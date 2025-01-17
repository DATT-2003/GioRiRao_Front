export const MenuItem = ({ image, title, price, bowls }) => (
  <div className="bg-gray-900 rounded-lg p-4 relative">
    <img
      src={image || "/api/placeholder/200/200"}
      alt={title}
      className="w-full h-48 object-cover rounded-lg mb-3"
    />
    <h3 className="text-white text-lg font-medium mb-1">{title}</h3>
    <div className="flex justify-between items-center">
      <span className="text-white">${price}</span>
      <span className="text-gray-400 text-sm">{bowls} Bowls available</span>
    </div>
  </div>
);
