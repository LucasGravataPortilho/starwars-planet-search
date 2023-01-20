import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

function Table() {
  const { list } = useContext(AuthContext);
  const [filteredList, setFilteredList] = useState([]);

  const handleFilter = ({ target }) => {
    const { value } = target;
    const getFiltered = list
      .filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredList(getFiltered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleFilter }
        />
      </div>
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
