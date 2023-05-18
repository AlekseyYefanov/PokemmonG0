import styled from 'styled-components';

export const StyledPokemonListWrap = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledPokemonList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledWrapperList = styled.div`
    width: 70%;
    magin: 0px auto;

    @media (max-width: 768px) {
      width: 100%;
      order: 2;
      margin: 0 auto;
    }
`;

export const StyledPokemonListItem = styled.li`
  cursor: pointer;
  padding: 5px;
  margin-bottom: 5px;
  background-color: #f2f2f2;
  border-radius: 5px;
  width: calc(33% - 15px);

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const StyledLoadMoreButton = styled.button`
  padding: 10px;
  margin-top: 10px;
  background-color: #ff3d00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

export const StyledPokemonDetails = styled.div`
  flex: 1;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;

  @media (max-width: 768px) {
    order: 1;
    margin-left: 0px;
    margin-bottom: 0px;
    position: fixed;
    bottom: 0;
    min-width: 320px;
    margin: 0 auto;
    width: 100%;
    padding: 5px;
    background-color: #7ab9ae;
  }
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