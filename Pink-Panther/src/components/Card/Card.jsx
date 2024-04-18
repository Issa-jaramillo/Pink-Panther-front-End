// Importa los estilos y las dependencias necesarias
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import remera from "../../../public/remera.jpeg";

// Define y exporta la función del componente Card
export default function Card({ id, name, categoryName, subcategoryName, color, priceEfectivo, size, quantity, photo}) {
   return (
      <div className={style.card}>
         <h3 className={style.h3}>{name}</h3>
         <img className={style.image} src={remera} alt={`${name} Photo`} /> {/* Usamos la imagen del producto proporcionada en DetailPage */}
         <h4 className={style.h4}>Categoria: {categoryName}</h4>
         <h4 className={style.h4}>Subcategoria: {subcategoryName}</h4>
         <h4 className={style.h4}>Color: {color}</h4>
         <h4 className={style.h4}>Precio Efectivo: {priceEfectivo}</h4>
         <h4 className={style.h4}>Talle: {size}</h4>
         <h4 className={style.h4}>Cantidad: {quantity}</h4>
         {/* Enlace a la página de detalles del producto */}
         <Link to={`/detail/${id}`} className={style.link}>
            Ver detalles
         </Link>
      </div>
   );
}
