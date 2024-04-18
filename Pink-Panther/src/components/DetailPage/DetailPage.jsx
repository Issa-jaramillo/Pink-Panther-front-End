import React from 'react';
import styles from './DetailPage.module.css';

import { AddToCartIcon, ClearCartIcon, CartIcon } from '../icons/Icons'; // Importa los iconos

export const DetailPage = ({ product }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={product.thumbnail} className={styles.productImage} alt={product.title} />
      </div>
      <div>
        <img src={product.images[0]} className={styles.mainImage} alt={product.title} />
      </div>
      <div>
        <h2 className='text-3xl font-bold underline'>{product.title}</h2>
        <div className={styles.productDetails}>
          <div>{product.brand}</div>
          <div>{product.category}</div>
          <div>{product.rating} reseñas</div>
          <div>{product.stock} disponibles</div>
          <div>xxxx</div>
          <div>xxxx</div>
        </div>
        <h4>{product.description}</h4>
        <label className={styles.price} htmlFor="">
          ${product.price * (1 - product.discountPercentage / 100)}
        </label>
        <div>
          <div className='flex bg-black'>
            <button>Agregar al carrito</button>
            <button><AddToCartIcon /></button> {/* Agrega el icono de agregar al carrito */}
            <button><ClearCartIcon /></button> {/* Agrega el icono de limpiar carrito */}
          </div>
          <button>Comprar  <CartIcon /> </button> {/* Agrega el icono del carrito */}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;