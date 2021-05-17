import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { searchPokemon } from "../../../../utils/pokeApi";
import errorImage from "../../../../assets/images/arkus_logo.png";

const PokemonContainer = (props) => {
  let pokemonName = props.name;
  let pokemonImage = props.images.front;

  if(props.shiny && props.front) {
    pokemonImage = props.images.frontShiny;
  } else if (props.shiny) {
    pokemonImage = props.images.backShiny;
  } else if (!props.front) {
    pokemonImage = props.images.back;
  }

  return (
    <div>
      <div>
        <button onClick={props.onChangeType}>{
            props.shiny ? 'Switch to regular' : 'Switch to shiny'
        }</button>
        <img
          className="Card-image"
          src={pokemonImage}
        />
        <h2>{pokemonName}</h2>
        <button onClick={props.onFlip}>{
            props.front ? 'Back' : 'Front'
        }</button>
      </div>
    </div>
  );
};

export default PokemonContainer;
