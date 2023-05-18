import React from 'react';

import {
    StyledPokemonListItem,
    StyledPokemonName,
    StyledPokemonImage,
    StyledPokemonTypes,
    StyledPokemonType,
  } from '../PokemonList/StyledPokemonList.style';

const RenderPokemons = ({ pokemonList, selectPokemon }) => {
    return pokemonList.map((pokemon) => (
        <StyledPokemonListItem key={pokemon.id} onClick={() => selectPokemon(pokemon)}>
          <StyledPokemonName>{pokemon.name}</StyledPokemonName>
          <StyledPokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
          <StyledPokemonTypes>
            {pokemon.types.map((type) => (
              <StyledPokemonType key={type.slot}>{type.type.name}</StyledPokemonType>
            ))}
          </StyledPokemonTypes>
        </StyledPokemonListItem>
      ));
}

export default RenderPokemons;