import React from "react";
import { DetailPage } from "../DetailPage/DetailPage";

const Card = ({ products }) => {
  // Obtiene el primer producto de la lista
  const firstProduct = products[0];

  return (
    <div>
      {/* Renderiza el componente DetailPage con el primer producto */}
      <DetailPage product={firstProduct} />
    </div>
  );
};

export default Card;
