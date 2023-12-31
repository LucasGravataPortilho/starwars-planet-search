import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [arrFilter, setArrFilter] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const json = await response.json();
      setList(json.results);
      setFilteredList(json.results);
    };
    fetchAPI();
  }, []);

  const contextValue = useMemo(() => ({
    list,
    setList,
    filteredList,
    setFilteredList,
    filter,
    setFilter,
    arrFilter,
    setArrFilter,
  }), [list, setList, filteredList,
    setFilteredList, filter, setFilter, arrFilter, setArrFilter]);

  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AuthProvider;
