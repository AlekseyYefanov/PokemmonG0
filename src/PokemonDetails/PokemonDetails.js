import React from 'react';
import { StyledPokemonDetailsPos, StyledPokemonStats, StyledPokemonStat, StyledPokemonTypes, StyledPokemonType, StyledPokemonName, StyledPokemonImage, StyledDetialsBox} from './StyledPokemonDetails.style'

const PokemonDetails = ({ selectedPokemon }) => {
return (<StyledPokemonDetailsPos>
        {selectedPokemon && (
          <>
            <StyledPokemonName>{selectedPokemon.name}</StyledPokemonName>
            <StyledDetialsBox>
                <div>
                    <StyledPokemonImage src={selectedPokemon?.sprites?.front_default} alt={selectedPokemon.name} />
                    <StyledPokemonTypes>
                    {selectedPokemon?.types.map(type => (
                        <StyledPokemonType key={type.slot}>{type.type.name}</StyledPokemonType>
                    ))}
                    </StyledPokemonTypes>
                </div>
                <StyledPokemonStats>
                {selectedPokemon?.stats.map(stat => (
                    <StyledPokemonStat key={stat.stat.name}>
                    <span>{stat.stat.name}</span>
                    <span>{stat.base_stat}</span>
                    </StyledPokemonStat>
                ))}
                </StyledPokemonStats>
            </StyledDetialsBox>
          </>
        )}
        </StyledPokemonDetailsPos>)
}

export default PokemonDetails;