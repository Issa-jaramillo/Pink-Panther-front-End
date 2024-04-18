
import React from "react"
import Card from "../Card/Card";

const Cards = ({ products }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Mapea sobre la lista de productos y renderiza una Card para cada uno */}
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    );
  };


export default Cards;

