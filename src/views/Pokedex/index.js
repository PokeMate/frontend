import React, { useState, useContext, useEffect } from "react";

import {
  Window,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  Button,
} from "react95";

import { BASE_URL, GENERATIONS } from "../../constants";

import PokemonTable from "./PokemonTable";
import { TabBody, Checkbox, Fieldset } from "react95/dist/prod";
import { PokemonContext } from "../../context/PokemonContext";
import { SelectionContext } from "../../context/SelectionContext";
import { WindowContext } from "../../context/WindowContext";

export default function Pokedex() {
  const [selectedGeneration, setSelectedGeneration] = useState(1);
  const [isOwned, setIsOwned] = useState(false);

  var handleTabChange = (tab) => setSelectedGeneration(tab);
  var handleOwnerChange = () => setIsOwned(!isOwned);

  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [selectedPokemons, setSelectedPokemon] = useContext(SelectionContext);
  const [windowManagement, setWindowManagement] = useContext(WindowContext);

  const [inspectedPokemon, setInspectedPokemon] = useState({});

  useEffect(() => {
    let didCancel = false;

    console.log("pokedex component loaded...");
    async function getPokedex() {
      const response = await fetch(BASE_URL + "/pokedex");
      const data = await response.json();
      setPokemons(data);
      if (!didCancel) {
        console.log(data);
      }
    }

    getPokedex();

    return () => {
      console.log("pokedex component unmounted...");
    };
  }, []);

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
            {GENERATIONS.map((gen) => (
              <Tab value={gen} key={gen}>
                Gen. {gen}
              </Tab>
            ))}
          </Tabs>
          <TabBody>
            <React.Fragment>
              <div style={windowStlye}>
                <div style={{ float: "left", paddingRight: "50px" }}>
                  <PokemonTable
                    pokemons={pokemons.filter(
                      (pokemon) =>
                        pokemon.generation === selectedGeneration.toString()
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
      {windowManagement.showPokemonDetailsView && <p>p</p>}
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
