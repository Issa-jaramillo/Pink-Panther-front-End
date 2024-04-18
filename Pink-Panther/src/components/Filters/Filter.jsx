import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, setPriceSort, selectColor, selectSize, setAlphabeticalSort, setPopularSort, setNewestSort, changePage } from 'src.Redux.Actions.actions';

const Filtros = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters); // Obtener los filtros del estado de Redux
  const categories = useSelector(state => state.categories); // Obtener las categorías del estado de Redux

  const handleFilterChange = (filterName, filterValue) => {
    switch (filterName) {
      case 'category':
        dispatch(selectCategory(filterValue));
        break;
      case 'priceSort':
        dispatch(setPriceSort(filterValue));
        break;
      case 'color':
        dispatch(selectColor(filterValue));
        break;
      case 'size':
        dispatch(selectSize(filterValue));
        break;
      case 'alphabeticalSort':
        dispatch(setAlphabeticalSort(filterValue));
        break;
      case 'popularSort':
        dispatch(setPopularSort());
        break;
      case 'newestSort':
        dispatch(setNewestSort());
        break;
      case 'pageNumber':
        dispatch(changePage(filterValue));
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    // Enviar acciones para restablecer todos los filtros
    dispatch(selectCategory(null));
    dispatch(setPriceSort(null));
    dispatch(selectColor(null));
    dispatch(selectSize(null));
    dispatch(setAlphabeticalSort(null));
    dispatch(setPopularSort(false));
    dispatch(setNewestSort(false));
    dispatch(changePage(1));
  };

  return (
    <div>
      {/* Filtro de Categoría */}
      <select value={filters.selectedCategory || ''} onChange={(e) => handleFilterChange('category', e.target.value)}>
        <option value="">Seleccionar Categoría</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      
      {/* Filtro de Orden de Precio */}
      <select value={filters.priceSort || ''} onChange={(e) => handleFilterChange('priceSort', e.target.value)}>
        <option value="">Ordenar por Precio</option>
        <option value="ASC">Menor a Mayor</option>
        <option value="DESC">Mayor a Menor</option>
      </select>
      
      {/* Filtro de Color */}
      <select value={filters.selectedColor || ''} onChange={(e) => handleFilterChange('color', e.target.value)}>
        <option value="">Seleccionar Color</option>
        {/* Opciones de colores */}
      </select>
      
      {/* Filtro de Tamaño */}
      <select value={filters.selectedSize || ''} onChange={(e) => handleFilterChange('size', e.target.value)}>
        <option value="">Seleccionar Tamaño</option>
        {/* Opciones de tamaños */}
      </select>
      
      {/* Filtro de Orden Alfabético */}
      <select value={filters.alphabeticalSort || ''} onChange={(e) => handleFilterChange('alphabeticalSort', e.target.value)}>
        <option value="">Orden Alfabético</option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>
      
      {/* Filtro de Popularidad */}
      <input type="checkbox" checked={filters.popularSort} onChange={() => handleFilterChange('popularSort', !filters.popularSort)} />
      <label>Popularidad</label>
      
      {/* Filtro de Novedad */}
      <input type="checkbox" checked={filters.newestSort} onChange={() => handleFilterChange('newestSort', !filters.newestSort)} />
      <label>Novedad</label>
      
      {/* Filtro de Número de Página */}
      <input type="number" value={filters.currentPage || 1} onChange={(e) => handleFilterChange('pageNumber', parseInt(e.target.value))} />
      
      {/* Botón de Reset */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Filtros;
