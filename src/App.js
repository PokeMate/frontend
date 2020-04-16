import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List } from "react95";
import Views from "./views";

import { PokemonProvider } from "./context/PokemonContext";
import { SelectionProvider } from "./context/SelectionContext";
import { WindowProvider } from "./context/WindowContext";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App() {
  return (
    <PokemonProvider>
      <SelectionProvider>
        <WindowProvider>
          <ResetStyles />
          <ThemeProvider theme={themes.default}>
            <List>
              <Views />
            </List>
          </ThemeProvider>
        </WindowProvider>
      </SelectionProvider>
    </PokemonProvider>
  );
}
