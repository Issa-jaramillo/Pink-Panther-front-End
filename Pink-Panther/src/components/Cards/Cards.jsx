import React, { useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ products }) => {
  const [cart, setCart] = useState([]); // Estado local para almacenar los productos en el carrito

  // Función para manejar la adición de un producto al carrito
  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Agregamos el producto al estado del carrito
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {/* Mapeamos sobre la lista de productos y renderizamos una Card para cada uno */}
      {products.map((product) => (
        <Card key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default Cards;