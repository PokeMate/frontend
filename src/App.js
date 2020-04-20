import React from "react";
import Views from "./views";

import { PokemonProvider } from "./context/PokemonContext";
import { SelectionProvider } from "./context/SelectionContext";

export default function App() {
  return (
    <PokemonProvider>
      <SelectionProvider>
        <Views />
      </SelectionProvider>
    </PokemonProvider>
  );
}
