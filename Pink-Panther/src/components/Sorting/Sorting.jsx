import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOption, setFilteredProducts, setPageNumber } from '../../Redux/Actions/actions';
import styles from './Sorting.module.css';

const sortingOptions = [
   { value: 'ASC', label: 'Price: Low to High' },
   { value: 'DESC', label: 'Price: High to Low' },
   { value: 'COLOR', label: 'Color' },
   { value: 'SIZE', label: 'Size' },
   { value: 'CATEGORY', label: 'Category' },
   { value: 'SUBCATEGORY', label: 'Subcategory' },
   { value: 'FAVORITES', label: 'Favorites' },
   { value: 'REVIEWS', label: 'Reviews' }
];

export default function Sorting() {
   const dispatch = useDispatch();
   const products = useSelector(state => state.allProducts); // Suponiendo que tengas un estado llamado "allProducts" que contiene todos los productos

   const handleSortChange = (sortOption) => {
      let sortedProducts = [...products]; // Clonar el array original

      if (sortOption === 'ASC') {
         sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'DESC') {
         sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === 'COLOR') {
         sortedProducts.sort((a, b) => a.color.localeCompare(b.color));
      } else if (sortOption === 'SIZE') {
         sortedProducts.sort((a, b) => a.size.localeCompare(b.size));
      } else if (sortOption === 'CATEGORY') {
         sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortOption === 'SUBCATEGORY') {
         sortedProducts.sort((a, b) => a.subcategory.localeCompare(b.subcategory));
      } else if (sortOption === 'FAVORITES') {
         sortedProducts.sort((a, b) => b.favorites - a.favorites);
      } else if (sortOption === 'REVIEWS') {
         sortedProducts.sort((a, b) => b.reviews - a.reviews);
      }

      dispatch(setSortOption(sortOption));
      dispatch(setFilteredProducts(sortedProducts)); // Enviar el array ordenado
      dispatch(setPageNumber(1));
   };

   const handleReset = () => {
      dispatch(setSortOption('')); // Restablecer la opción de clasificación
      dispatch(setFilteredProducts(products));
      dispatch(setPageNumber(1));
   };

   return (
      <div className={styles.container}>
         <h4>Sorting</h4>
         {sortingOptions.map(option => (
            <button
               key={option.value}
               onClick={() => handleSortChange(option.value)}
               value={option.value}
            >
               {option.label}
            </button>
         ))}
         <button onClick={handleReset}>Reset</button>
      </div>
   );
}
