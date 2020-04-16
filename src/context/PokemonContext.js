import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([
    {
      id: 1,
      generation: 1,
      name: "Example Pokemon",
      url: "114.png",
      types: ["bug", "water"],
      attractiveness: 0.5,
      fertility: 0.8,
      fitness: 0.3,
      preferred_types: ["grass", "poison"],
      no_go_types: ["normal", "fire"],
      no_gos: ["Slimy Pokemons", "Arrogant legendary Pokemons"],
    },
    {
      id: 2,
      generation: 1,
      name: "Example Pokemon",
      url: "114.png",
      types: ["bug", "water"],
      attractiveness: 0.5,
      fertility: 0.8,
      fitness: 0.3,
      preferred_types: ["grass", "poison"],
      no_go_types: ["normal", "fire"],
      no_gos: ["Slimy Pokemons", "Arrogant legendary Pokemons"],
    },
    {
      id: 3,
      generation: 1,
      name: "Example Pokemon",
      url: "114.png",
      types: ["bug", "water"],
      attractiveness: 0.5,
      fertility: 0.8,
      fitness: 0.3,
      preferred_types: ["grass", "poison"],
      no_go_types: ["normal", "fire"],
      no_gos: ["Slimy Pokemons", "Arrogant legendary Pokemons"],
    },
  ]);
  return (
    <PokemonContext.Provider value={[pokemons, setPokemons]}>
      {children}
    </PokemonContext.Provider>
  );
}
