import React from "react";
import './Pokemon.css'

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
    <div >
      <div className="Pokemon-container">
        <button  onClick={props.onChangeType} className="Button-pokemon">{
            props.shiny ? 'Switch to regular' : 'Switch to shiny'
        }</button>
      </div>
      <div>
        <img
          className="Card-image"
          src={pokemonImage}
          alt="Pokemon "
        />
        <h2 className="Pokemon-container">{pokemonName}</h2>
      </div>
      <div className="Pokemon-container">
        <button onClick={props.onFlip} className="Button-pokemon">{
            props.front ? 'Back' : 'Front'
        }</button>
      </div>
      
    </div>
  );
};

export default PokemonContainer;
