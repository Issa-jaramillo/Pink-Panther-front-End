
import { actionTypes } from './actionTypes';

// Acciones para seleccionar categoría y subcategoría
export const selectCategory = (category) => ({
  type: actionTypes.SELECT_CATEGORY,
  payload: category,
});

export const selectSubcategory = (subcategory) => ({
  type: actionTypes.SELECT_SUBCATEGORY,
  payload: subcategory,
});

// Acciones para ordenar por precio
export const setPriceSort = (order) => ({
  type: actionTypes.SET_PRICE_SORT,
  payload: order,
});

// Acciones para seleccionar color y tamaño
export const selectColor = (color) => ({
  type: actionTypes.SELECT_COLOR,
  payload: color,
});

export const selectSize = (size) => ({
  type: actionTypes.SELECT_SIZE,
  payload: size,
});

// Acciones para ordenar alfabéticamente, por popularidad y por novedad
export const setAlphabeticalSort = (order) => ({
  type: actionTypes.SET_ALPHABETICAL_SORT,
  payload: order,
});

export const setPopularSort = () => ({
  type: actionTypes.SET_POPULAR_SORT,
});

export const setNewestSort = () => ({
  type: actionTypes.SET_NEWEST_SORT,
});

// Acción para cambiar la página
export const changePage = (pageNumber) => ({
  type: actionTypes.CHANGE_PAGE,
  payload: pageNumber,
});
