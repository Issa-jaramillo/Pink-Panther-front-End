
import React from "react";

const Card = ({ product,onAddToCart }) => {
  const handleClick = () => {
    onAddToCart(product); // Llamamos a la función onAddToCart pasando el producto actual
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-600">${product.price}</p>
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    </div>
  );
};


export default Card;