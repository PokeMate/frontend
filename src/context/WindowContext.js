import React, { createContext, useState } from "react";

export const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [windowManagement, setWindowManagement] = useState({
    showPokemonDetailsView: false,
  });

  return (
    <WindowContext.Provider value={[windowManagement, setWindowManagement]}>
      {children}
    </WindowContext.Provider>
  );
}
