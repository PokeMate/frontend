import React, { useState, useContext } from "react";

import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  Button,
} from "react95";

import PokemonTable from "./PokemonTable";
import { TabBody, Checkbox, Fieldset } from "react95/dist/prod";
import { PokemonContext } from "../../context/PokemonContext";
import { SelectionContext } from "../../context/SelectionContext";
import { WindowContext } from "../../context/WindowContext";

export default function Pokedex() {
  const [selectedGeneration, setSelectedGeneration] = useState(1);
  const [isOwned, setIsOwned] = useState(false);

  const tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var handleTabChange = (tab) => setSelectedGeneration(tab);
  var handleOwnerChange = () => setIsOwned(!isOwned);

  // TODO on componentdidmount get pokemons

  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [selectedPokemons, setSelectedPokemon] = useContext(SelectionContext);
  const [windowManagement, setWindowManagement] = useContext(WindowContext);

  const [inspectedPokemon, setInspectedPokemon] = useState({});

  return (
    <div>
      <Window>
        <WindowHeader>PokéDex</WindowHeader>
        <WindowContent>
          <Fieldset label="Filter">
            <Checkbox
              checked={isOwned}
              onChange={handleOwnerChange}
              value="owned"
              label="Only show my captured Pokemons"
              name="owned"
            />
          </Fieldset>
          <br />
          <Tabs value={selectedGeneration} onChange={handleTabChange}>
            {tabs.map((tab) => (
              <Tab value={tab} key={tab}>
                Gen. {tab}
              </Tab>
            ))}
          </Tabs>
          <TabBody>
            <React.Fragment>
              <div style={windowStlye}>
                <div style={{ float: "left", paddingRight: "50px" }}>
                  <PokemonTable
                    pokemons={pokemons.filter(
                      (pokemon) => pokemon.generation === selectedGeneration
                    )}
                  />
                </div>
              </div>
            </React.Fragment>
          </TabBody>
          <br />

          <Fieldset label="Selected">
            {selectedPokemons.map((pokemon) => (
              <p>{pokemon.name}</p>
            ))}
            <br />
            <Button>
              <span role="img" aria-label="fire">
                🔥
              </span>
              Mate
            </Button>
          </Fieldset>
        </WindowContent>
      </Window>
      {windowManagement.showPokemonDetailsView && <p>p</p>}}
    </div>
  );
}

const windowStlye = {
  maxHeight: "calc(80vh)",
  minHeight: "calc(40vh)",
  maxWidth: "calc(00vw)",
  minWidth: "1000px",
  display: "inline-block",
};
