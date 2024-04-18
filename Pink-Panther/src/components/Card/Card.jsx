// Importa los estilos y las dependencias necesarias
import style from './Card.module.css';
import { Link } from 'react-router-dom';

// Define y exporta la función del componente Card
export default function Card({ id, name, categoryName, subcategoryName, color, priceEfectivo, size, quantity, photo}) {
   return (
      <div className={style.card}>
         <h3 className={style.h3}>{name}</h3>
         <img className={style.image} src={photo} alt={`${name} Photo`} />
         <h4 className={style.h4}>Category: {categoryName}</h4>
         <h4 className={style.h4}>Subcategory: {subcategoryName}</h4>
         <h4 className={style.h4}>Color: {color}</h4>
         <h4 className={style.h4}>Price Efectivo: {priceEfectivo}</h4>
         <h4 className={style.h4}>Size: {size}</h4>
         <h4 className={style.h4}>Quantity: {quantity}</h4>
         {/* Enlace a la página de detalles del producto */}
         <Link to={`/detail/${id}`} className={style.link}>
            Ver detalles
         </Link>
      </div>
   );
}
