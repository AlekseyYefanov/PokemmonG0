import React, { useState, useEffect, useCallback } from 'react';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import SearchPanel from '../SearchPanel/SearchPanel';
import RenderPokemons from '../RenderPokemons/RenderPokemons';
import NoResult from '../NoResult/NoResult';
import {
  StyledPokemonListWrap,
  StyledPokemonList,
  StyledWrapperList,
  StyledLoadMoreButton,
  StyledPokemonDetails,
} from './StyledPokemonList.style';

import { DEFAULT_OFFSET } from '../common'

const fetchPokemonList = async (offset, updateList) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`);
    const data = await response.json();
    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokemonDetails = await response.json();
        return pokemonDetails;
      })
    );
    updateList((prevList) => [...prevList, ...pokemonData]);
  } catch (error) {
    console.log('Error fetching Pokemon list:', error);
  }
};



const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [offset, setOffset] = useState(0);
  const [filterType, setFilterType] = useState('all');

  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonList(offset, setPokemonList);
  }, [offset]);

  useEffect(() => {
    filterPokemonList();
  }, [filterType, pokemonList]);

  const loadMorePokemon = useCallback(() => {
    setOffset((prevOffset) => prevOffset + DEFAULT_OFFSET);
  }, []);

  const selectPokemon = useCallback((pokemon) => {
    setSelectedPokemon(pokemon);
  }, []);

  const filterPokemonList = useCallback(() => {
    if(filterType === 'all') {
      setFilteredPokemonList(pokemonList);
      return;
    } else {

    let filteredList = pokemonList.filter((pokemon) =>
      pokemon.types.some((type) => type.type.name === filterType)
    );

    setFilteredPokemonList(filteredList);
    }
  }, [filterType, pokemonList]);


  return (
    <StyledPokemonListWrap>
      <StyledWrapperList>
        <SearchPanel filterType={filterType} setFilterType={setFilterType} />
        <StyledPokemonList>
          {filteredPokemonList.length ? <RenderPokemons pokemonList={filteredPokemonList} selectPokemon={selectPokemon} /> : <NoResult />}
        </StyledPokemonList>
        <StyledLoadMoreButton onClick={loadMorePokemon}>Load More</StyledLoadMoreButton>
      </StyledWrapperList>
      {selectedPokemon && (
        <StyledPokemonDetails>
          <PokemonDetails selectedPokemon={selectedPokemon} />
        </StyledPokemonDetails>
      )}
    </StyledPokemonListWrap>
  );
};

export default PokemonList;
