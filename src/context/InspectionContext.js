import React, { createContext, useState } from "react";

export const InspectionContext = createContext();

export function InspectionProvider({ children }) {
  const [inspectedPokemon, setInspectedPokemon] = useState(null);
  return (
    <InspectionContext.Provider value={[inspectedPokemon, setInspectedPokemon]}>
      {children}
    </InspectionContext.Provider>
  );
}
