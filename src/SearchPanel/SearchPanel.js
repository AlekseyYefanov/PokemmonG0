import React, { useState, useEffect, useCallback } from 'react';

const fetchPokemonTypes = async (setPokemonTypes) => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type?limit=999');
      const data = await response.json();
      setPokemonTypes(data.results);
    } catch (error) {
      console.log('Error fetching Pokemon types:', error);
    }
  };


const SearchPanel = ({ filterType, setFilterType }) => {
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => {
        fetchPokemonTypes(setPokemonTypes);
      }, []);

      const handleFilterChange = (event) => {
        setFilterType(event.target.value);
      }

    return (
        <select value={filterType} onChange={handleFilterChange}>
          <option value="all">All Types</option>
          {pokemonTypes.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      );
}

export default SearchPanel;