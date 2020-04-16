import React, { useEffect } from "react";
import { Fieldset } from "react95";
import EmojiProperty from "../../components/EmojiProperty.js";
import TypeIcon from "../../components/TypeIcon";

import { useParams } from "react-router-dom";

export default function PokemonDetails() {
  var pokemon = {
    id: 4,
    name: "Example Pokemon",
    url: "114.png",
    types: ["bug", "water"],
    attractiveness: 0.5,
    fertility: 0.8,
    fitness: 0.3,
    preferred_types: ["grass", "poison"],
    no_go_types: ["normal", "fire"],
    no_gos: ["Slimy Pokemons", "Arrogant legendary Pokemons"],
  };

  let { id } = useParams();

  return (
    <Fieldset label="Details">
      <div style={containerStyle} id={"detailsContainer"}>
        <div>{id}</div>
        <div>pokemon.name</div>
        {/* <img style={imageStyle} src={pokemon.url} alt="example" />
        <p style={centeredText}>{pokemon.name}</p>
        <div style={typesStyleCentered}>
          {pokemon.types.map((type) => (
            <TypeIcon type={type} medium />
          ))}
        </div>

        <EmojiProperty
          emoji="🔥"
          property="Attractiveness"
          value={<p>{pokemon.attractiveness * 100}% </p>}
        />
        <EmojiProperty
          emoji="🌿"
          property="Fertility"
          value={<p>{pokemon.fertility * 100}% </p>}
        />
        <EmojiProperty
          emoji="🏋️‍♀️"
          property="Fitness"
          value={<p>{pokemon.fitness * 100}% </p>}
        />
        <EmojiProperty
          emoji="🧲"
          property="Preferred Types"
          value={
            <div style={typesStyleRight}>
              {pokemon.preferred_types.map((type) => (
                <TypeIcon type={type} small />
              ))}
            </div>
          }
        />
        <EmojiProperty
          emoji="❌"
          property="No-Go Types"
          value={
            <div style={typesStyleRight}>
              {pokemon.no_go_types.map((type) => (
                <TypeIcon type={type} small />
              ))}
            </div>
          }
        />
        <EmojiProperty
          emoji="🤮"
          property="No-Gos"
          value={
            <div style={typesStyleRight}>
              {pokemon.no_gos.map((nogo) => (
                <p>{nogo}</p>
              ))}
            </div>
          }
        /> */}
      </div>
    </Fieldset>
  );
}

const typesStyleCentered = {
  flexDirection: "row",
  textAlign: "center",
};

const typesStyleRight = {
  flexDirection: "row",
  textAlign: "right",
};

const containerStyle = {
  margin: "auto",
};

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "30%",
};

const centeredText = {
  textAlign: "center",
};
