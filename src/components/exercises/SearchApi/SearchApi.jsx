import React, { useState, useEffect } from 'react';
import PokemonContainer from './Pokemon/Pokemon';
import './SearchApi.css';
import {searchPokemon} from '../../../utils/pokeApi';

const BASE_API = 'https://pokeapi.co/api/v2/';

const SearchApi = () => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [shiny, setShinyPokemon] = useState(false);
    const [back, setBackPokemon] = useState(false);
  
    useEffect(() => {
      const callApi = async () => {
        const response = await fetch(BASE_API + `pokemon`);
        const result = await response.json();
        console.log(result);
        setData(result);
      }
      callApi()
    }, []);

    const searchingPokemon = (event) =>{
        setSearch(event.target.value);
    }

    const searchButton = async (event) =>{
        const data = await searchPokemon(search);
        setPokemon(data);
    }

    const handleShiny = () => {
        setShinyPokemon(prePokemonShiny => !prePokemonShiny);
        
    }

    const handleSwitch = () => {
        setBackPokemon(prePokemonBack => !prePokemonBack);
    }
  
    const images = pokemon ? {
        front: pokemon.sprites.front_default,
        frontShiny: pokemon.sprites.front_shiny,
        back: pokemon.sprites.back_default,
        backShiny: pokemon.sprites.back_shiny
        
    } : null;

  return(
    <div className="Container">
        <div className="Container-LogoPokemon">
            <img className="LogoPokemon" src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo-650x366.png" alt="" />
        </div>
        <div>
            {data && (
                <input className="SearchInput" 
                    placeholder="Search Pokemon" 
                    type="text"
                    onChange = {searchingPokemon}
                />
            )}
            <button className="SearchButton" onClick={searchButton}>Search</button>
        </div>

        <div className="Results">
            {pokemon &&
                <div className="Card-pokemon">
                    <PokemonContainer
                        name = {pokemon.name}
                        images = {images}
                        front = {!back}
                        shiny = {shiny}
                        onChangeType={handleShiny}
                        onFlip = {handleSwitch}
                    />
                </div>
                
            }
        </div>

    </div>
  );
};

export default SearchApi;