import React from "react";
import Views from "./views";

import { PokemonProvider } from "./context/PokemonContext";
import { SelectionProvider } from "./context/SelectionContext";
import { InspectionProvider } from "./context/InspectionContext";

export default function App() {
  return (
    <PokemonProvider>
      <SelectionProvider>
        <InspectionProvider>
          <Views />
        </InspectionProvider>
      </SelectionProvider>
    </PokemonProvider>
  );
}
