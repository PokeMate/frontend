import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export function SelectionProvider({ children }) {
  const [selection, setSelection] = useState({
    pokemon1: undefined,
    pokemon2: undefined,
  });

  return (
    <SelectionContext.Provider value={[selection, setSelection]}>
      {children}
    </SelectionContext.Provider>
  );
}
