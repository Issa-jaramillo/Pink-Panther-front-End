import React from 'react';
import { changePage } from '../../Redux/Actions/actions'; // Importa la acción de Redux para cambiar la página
import { useDispatch, useSelector } from 'react-redux';
import styles from './Paginator.module.css'; // Importa estilos CSS

function Paginator({ perPage = 9 }) {
  const dispatch = useDispatch(); // Hook useDispatch para enviar acciones a Redux
  const { currentPage, totalPages } = useSelector((state) => state.filters); // Obtiene el estado de Redux

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    dispatch(changePage(pageNumber)); // Envía una acción para cambiar la página
  };

  // Función para manejar la acción de ir a la página siguiente
  const handleIncrement = () => {
    if (currentPage < totalPages) {
      dispatch(changePage(currentPage + 1)); // Envía una acción para ir a la siguiente página si no estamos en la última
    }
  };

  // Función para manejar la acción de ir a la página anterior
  const handleDecrement = () => {
    if (currentPage > 1) {
      dispatch(changePage(currentPage - 1)); // Envía una acción para ir a la página anterior si no estamos en la primera
    }
  };

  return (
    <div className={styles.paginator}>
      <ul className={`${styles.pagination} ${styles.modal_5}`}> {/* Aplica estilos CSS */}
        {currentPage > 1 && (
          <div>
            {/* Botón para ir a la primera página */}
            <li>
              <a href="#" onClick={() => handlePageChange(1)} className={`${styles.prev} ${styles.fa}`}>
                |&laquo;
              </a>
            </li>
            {/* Botón para ir a la página anterior */}
            <li>
              <a href="#" onClick={handleDecrement} className={`${styles.prev} ${styles.fa}`}>
                &laquo;
              </a>
            </li>
          </div>
        )}
        {/* Muestra los números de página */}
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))
          .map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href="#"
                onClick={() => handlePageChange(pageNumber)}
                className={pageNumber === currentPage ? styles.active : ''}
              >
                {pageNumber}
              </a>
            </li>
          ))}
        {currentPage < totalPages && (
          <div>
            {/* Botón para ir a la página siguiente */}
            <li>
              <a href="#" onClick={handleIncrement} className={`${styles.next} ${styles.fa}`}>
                &raquo;
              </a>
            </li>
            {/* Botón para ir a la última página */}
            <li>
              <a
                href="#"
                onClick={() => handlePageChange(totalPages)}
                className={`${styles.next} ${styles.fa}`}
              >
                &raquo;|
              </a>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Paginator;
