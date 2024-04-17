import React from 'react';
import styles from './DetailPage.module.css';
import remera from "../../../public/remera.jpeg"

export const DetailPage = () => {

  return (
    <div className={styles.container}>
      <div>
        <img src={remera} className={styles.productImage} alt="" />
      </div>
      <div>
        <img src={remera} className={styles.mainImage} alt='' />
      </div>
      <div>
        <h2 className='text-3xl font-bold underline'>Remera</h2>
        <div className={styles.productDetails}>
          <div>xxxx</div>
          <div>xxxx</div>
          <div>32 reseñas</div>
          <div>xxxx</div>
          <div>153 ventas</div>
          <div>xxxx</div>
        </div>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          ullam fugit enim ipsa nam minus assumenda molestias qui dolore vero
          sint, eum hic laudantium, quae iste cupiditate mollitia quis
          praesentium?
        </h4>
        <label className={styles.price} htmlFor="">
          $40.000
        </label>
        <div>
          <div className='flex bg-black'>
            <button>1</button>
            <button>Agregar al carrito</button>
            <button>fav</button>
          </div>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};
