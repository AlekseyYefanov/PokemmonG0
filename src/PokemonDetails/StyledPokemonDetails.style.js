import styled from 'styled-components';

export const StyledPokemonDetailsPos = styled.div`
    position: fixed;
    width: 100%;
    max-width: 400px;

    @media (max-width: 768px) {
      position: initial;
      max-width: 100%;
    }
`;

export const StyledDetialsBox = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    padding: 0px 20px;
  }
`;

export const StyledPokemonDetails = styled.div`
  flex: 1;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const StyledPokemonName = styled.h2`
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledPokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 10px;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 450px) {
    height: 125px;
  }

`;

export const StyledPokemonStats = styled.div`
  margin-bottom: 10px;
`;

export const StyledPokemonStat = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPokemonTypes = styled.div`
  margin-bottom: 10px;
`;

export const StyledPokemonType = styled.span`
  display: inline-block;
  padding: 5px;
  margin-right: 5px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
`;

