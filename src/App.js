import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List } from "react95";
import Views from "./views";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App() {
  return (
    <div>
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <List>
          <Views />
        </List>
      </ThemeProvider>
    </div>
  );
}
