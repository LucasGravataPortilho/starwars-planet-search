import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

function Table() {
  const { list, filteredList, setFilteredList, filter,
    setFilter, arrFilter, setArrFilter } = useContext(AuthContext);
  const [selectedColumn, setSelectedColumn] = useState([]);
  const [visualFilter, setVisualFilter] = useState([]);
  const comparisons = ['maior que', 'menor que', 'igual a'];

  useEffect(() => {
    const options = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    setSelectedColumn(options);
  }, []);

  const handleFilter = ({ target }) => {
    const { value } = target;
    if (value === '') {
      setFilteredList(list);
    } else {
      const getFiltered = list
        .filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));
      setFilteredList(getFiltered);
    }
  };

  const handleChange = ({ target }) => {
    setFilter({ ...filter, [target.name]: target.value });
  };

  const handleClick = () => {
    setArrFilter([...arrFilter, filter]);
    const filterSelected = selectedColumn.filter((x) => x !== filter.column);
    const visualFiltered = selectedColumn.find((x) => x === filter.column);
    setSelectedColumn(filterSelected);
    setVisualFilter([...visualFilter, visualFiltered]);
    setFilter({ ...filter, column: selectedColumn[1] });
  };

  const handleClickX = (column) => {
    setVisualFilter(visualFilter.filter((x) => !x.includes(column)));
    setSelectedColumn([...selectedColumn, column]);
    setArrFilter(arrFilter.filter((x) => !x.column.includes(column)));
    setFilteredList(list);
  };

  const handleClickRemoveAll = () => {
    setSelectedColumn([...selectedColumn, ...visualFilter]);
    setVisualFilter([]);
    setArrFilter([]);
  };

  const filterPopulation = (comparison, value) => {
    if (comparison === 'maior que') {
      const filtro = filteredList.filter((x) => Number(x.population) > value);
      setFilteredList(filtro);
    } else if (comparison === 'menor que') {
      const filtro = filteredList.filter((x) => Number(x.population) < value);
      setFilteredList(filtro);
    } else if (comparison === 'igual a') {
      const filtro = filteredList.filter((x) => Number(x.population) === value);
      setFilteredList(filtro);
    }
  };

  const filterOrbital = (comparison, value) => {
    if (comparison === 'maior que') {
      const filtro = filteredList.filter((x) => Number(x.orbital_period) > value);
      setFilteredList(filtro);
    } else if (comparison === 'menor que') {
      const filtro = filteredList.filter((x) => Number(x.orbital_period) < value);
      setFilteredList(filtro);
    } else if (comparison === 'igual a') {
      const filtro = filteredList.filter((x) => Number(x.orbital_period) === value);
      setFilteredList(filtro);
    }
  };

  const filterDiameter = (comparison, value) => {
    if (comparison === 'maior que') {
      const filtro = filteredList.filter((x) => Number(x.diameter) > value);
      setFilteredList(filtro);
    } else if (comparison === 'menor que') {
      const filtro = filteredList.filter((x) => Number(x.diameter) < value);
      setFilteredList(filtro);
    } else if (comparison === 'igual a') {
      const filtro = filteredList.filter((x) => Number(x.diameter) === value);
      setFilteredList(filtro);
    }
  };

  const filterRotation = (comparison, value) => {
    if (comparison === 'maior que') {
      const filtro = filteredList.filter((x) => Number(x.rotation_period) > value);
      setFilteredList(filtro);
    } else if (comparison === 'menor que') {
      const filtro = filteredList.filter((x) => Number(x.rotation_period) < value);
      setFilteredList(filtro);
    } else if (comparison === 'igual a') {
      const filtro = filteredList.filter((x) => Number(x.rotation_period) === value);
      setFilteredList(filtro);
    }
  };

  const filterSurface = (comparison, value) => {
    if (comparison === 'maior que') {
      const filtro = filteredList.filter((x) => Number(x.surface_water) > value);
      setFilteredList(filtro);
    } else if (comparison === 'menor que') {
      const filtro = filteredList.filter((x) => Number(x.surface_water) < value);
      setFilteredList(filtro);
    } else if (comparison === 'igual a') {
      const filtro = filteredList.filter((x) => Number(x.surface_water) === value);
      setFilteredList(filtro);
    }
  };

  useEffect(() => {
    if (arrFilter.length > 0) {
      const { column, comparison, value } = arrFilter[arrFilter.length - 1];
      if (column === 'population') {
        filterPopulation(comparison, Number(value));
      } else if (column === 'orbital_period') {
        filterOrbital(comparison, Number(value));
      } else if (column === 'diameter') {
        filterDiameter(comparison, Number(value));
      } else if (column === 'rotation_period') {
        filterRotation(comparison, Number(value));
      } else if (column === 'surface_water') {
        filterSurface(comparison, Number(value));
      }
    } else {
      setFilteredList(list);
    }
  }, [arrFilter]);

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleFilter }
        />
      </div>
      <br />
      <div>
        <select
          data-testid="column-filter"
          name="column"
          value={ filter.column }
          onChange={ handleChange }
        >
          {selectedColumn.map((x) => (
            <option key={ x }>{x}</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ filter.comparison }
          onChange={ handleChange }
        >
          {comparisons.map((x) => (
            <option key={ x }>{x}</option>
          ))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ filter.value }
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
      <div>
        {
          visualFilter.map((x, i) => (
            <div key={ i } data-testid="filter">
              {x}
              <button
                type="button"
                onClick={ () => handleClickX(x) }
              >
                X
              </button>
            </div>
          ))
        }
      </div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleClickRemoveAll }
      >
        Remove All Filters
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
