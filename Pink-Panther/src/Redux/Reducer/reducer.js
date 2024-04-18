
// Importar los tipos de acciones
import { actionTypes } from '../Actions/actionTypes';


// Definir el estado inicial del reducer
const initialState = {
  selectedCategory: null,       // Categoría seleccionada
  selectedSubcategory: null,    // Subcategoría seleccionada
  priceSort: null,              // Orden de precio
  selectedColor: null,          // Color seleccionado
  selectedSize: null,           // Tamaño seleccionado
  alphabeticalSort: null,       // Orden alfabético
  popularSort: false,           // Orden de popularidad
  newestSort: false,            // Orden de novedad
};

// Reducer para gestionar los filtros
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    // Cuando se selecciona una categoría
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,  // Actualizar la categoría seleccionada
      };
    // Cuando se selecciona una subcategoría
    case actionTypes.SELECT_SUBCATEGORY:
      return {
        ...state,
        selectedSubcategory: action.payload, // Actualizar la subcategoría seleccionada
      };
    // Cuando se establece el orden de precio
    case actionTypes.SET_PRICE_SORT:
      return {
        ...state,
        priceSort: action.payload,  // Actualizar el orden de precio
      };
    // Cuando se selecciona un color
    case actionTypes.SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.payload, // Actualizar el color seleccionado
      };
    // Cuando se selecciona un tamaño
    case actionTypes.SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,  // Actualizar el tamaño seleccionado
      };
    // Cuando se establece el orden alfabético
    case actionTypes.SET_ALPHABETICAL_SORT:
      return {
        ...state,
        alphabeticalSort: action.payload,  // Actualizar el orden alfabético
      };
    // Cuando se establece el orden de popularidad
    case actionTypes.SET_POPULAR_SORT:
      return {
        ...state,
        popularSort: !state.popularSort,  // Invertir el orden de popularidad y desactivar el orden de novedad
        newestSort: false,                // Desactivar el orden de novedad
      };
    // Cuando se establece el orden de novedad
    case actionTypes.SET_NEWEST_SORT:
      return {
        ...state,
        newestSort: !state.newestSort,  // Invertir el orden de novedad y desactivar el orden de popularidad
        popularSort: false,             // Desactivar el orden de popularidad
      };
    // Por defecto, retornar el estado sin modificar
    default:
      return state;
  }
};

export default filtersReducer;  // Exportar el reducer
