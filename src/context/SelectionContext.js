import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export function SelectionProvider({ children }) {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  return (
    <SelectionContext.Provider value={[selectedPokemons, setSelectedPokemons]}>
      {children}
    </SelectionContext.Provider>
  );
}
