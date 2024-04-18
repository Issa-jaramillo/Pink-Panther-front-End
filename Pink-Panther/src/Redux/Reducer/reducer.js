
import { actionTypes } from '../Actions/actionTypes';

// Definiendo el estado inicial para los filtros.
const initialState = {
  selectedCategory: null,          // Categoría seleccionada
  selectedSubcategory: null,       // Subcategoría seleccionada
  priceSort: null,                 // Orden de precio
  selectedColor: null,             // Color seleccionado
  selectedSize: null,              // Tamaño seleccionado
  alphabeticalSort: null,          // Orden alfabético
  popularSort: false,              // Orden popular (inicializado como falso)
  newestSort: false,               // Orden más nuevo (inicializado como falso)
  currentPage: 1,                  // Página actual (inicializada como 1)
  totalPages: 1,                   // Total de páginas (inicializado como 1)
};

// Reductor para manejar los cambios en el estado de los filtros.
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,  // Actualiza la categoría seleccionada
      };
    case actionTypes.SELECT_SUBCATEGORY:
      return {
        ...state,
        selectedSubcategory: action.payload,  // Actualiza la subcategoría seleccionada
      };
    case actionTypes.SET_PRICE_SORT:
      return {
        ...state,
        priceSort: action.payload,  // Establece el orden de precio
      };
    case actionTypes.SELECT_COLOR:
      return {
        ...state,
        selectedColor: action.payload,  // Actualiza el color seleccionado
      };
    case actionTypes.SELECT_SIZE:
      return {
        ...state,
        selectedSize: action.payload,  // Actualiza el tamaño seleccionado
      };
    case actionTypes.SET_ALPHABETICAL_SORT:
      return {
        ...state,
        alphabeticalSort: action.payload,  // Establece el orden alfabético
      };
    case actionTypes.SET_POPULAR_SORT:
      return {
        ...state,
        popularSort: !state.popularSort,  // Invierte el estado de orden popular
        newestSort: false,                // Restablece el estado de orden más nuevo a falso
      };
    case actionTypes.SET_NEWEST_SORT:
      return {
        ...state,
        newestSort: !state.newestSort,  // Invierte el estado de orden más nuevo
        popularSort: false,             // Restablece el estado de orden popular a falso
      };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,  // Cambia la página actual
      };
    default:
      return state;  // Devuelve el estado sin cambios si no hay acciones coincidentes
  }
};

export default filtersReducer;  
