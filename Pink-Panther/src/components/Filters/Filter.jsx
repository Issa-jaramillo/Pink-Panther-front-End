import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilters } from 'src.Redux.Actions.actions';

const Filtros = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters); // Obtener los filtros del estado de Redux

  const handleFilterChange = (filterName, filterValue) => {
    const newFilter = { [filterName]: filterValue };
    dispatch(setFilter(newFilter)); // Establecer el filtro seleccionado
  };

  const handleReset = () => {
    dispatch(resetFilters()); // Restablecer todos los filtros
  };

  return (
    <div>
      {/* Aquí colocarías los controles para seleccionar categorías, precios, colores, etc. */}
      {/* Ejemplo de cómo podrías manejar un filtro de categoría */}
      <select value={filters.category || ''} onChange={(e) => handleFilterChange('category', e.target.value)}>
        <option value="">Seleccionar Categoría</option>
        {/* Aquí puedes mapear tus categorías disponibles y generar opciones */}
      </select>
      {/* Otros filtros... */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Filtros;
