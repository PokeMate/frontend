import React, { useState, useContext, useEffect } from "react";

import { BASE_URL } from "../../constants";

import PokemonCard from "../../components/PokemonCard";

import { PokemonContext } from "../../context/PokemonContext";
import { SelectionContext } from "../../context/SelectionContext";
import { Grid, CircularProgress, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import PokedexFilers from "./PokedexFilers";
import { makeStyles } from "@material-ui/core/styles";

export default function Pokedex() {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [selection, setSelection] = useContext(SelectionContext);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openSnackbarError, setOpenSnackbarError] = React.useState(false);

  useEffect(() => {
    let didCancel = false;

    console.log("pokedex component loaded...");
    async function getPokedex() {
      const response = await fetch(BASE_URL + "/pokedex");
      const data = await response.json();
      setPokemons(data);
      setIsLoading(false);
      if (!didCancel) {
        console.log(data);
      }
    }

    getPokedex();

    return () => {
      console.log("pokedex component unmounted...");
    };
  }, [setPokemons]);

  const filterPokemons = (owned, selectedGenerations, selectedTypes) => {
    var generations = selectedGenerations.filter((gen, index) => {
      if (gen) {
        return index + 1;
      }
    });
    var types = selectedTypes.map((type) => type.name);
    console.log(owned);
    console.log(generations);
    console.log(types);

    var newPokemons = pokemons.filter(
      (pokemon) =>
        types.includes(pokemon.type1.toLowerCase()) &&
        generations.includes(pokemon.generation)
    );

    setPokemons(newPokemons);
  };

  const addToSelection = (pokemon) => {
    if (selection.pokemon1 === undefined) {
      setSelection({ ...selection, pokemon1: pokemon });
      setOpenSnackbar(true);
    } else if (selection.pokemon2 === undefined) {
      setSelection({ ...selection, pokemon2: pokemon });
      setOpenSnackbar(true);
    } else {
      setOpenSnackbarError(true);
    }
  };

  if (isLoading || pokemons === null) {
    return <CircularProgress />;
  } else {
    return (
      <div className={classes.root}>
        <Grid container alignItems="stretch" spacing={2} justify="space-evenly">
          <Grid item xs={12}>
            <PokedexFilers filterPokemons={filterPokemons} />
          </Grid>

          {pokemons.slice(1, 100).map((pokemon) => (
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id.counter}
                filterPokemons={filterPokemons}
                addToSelection={addToSelection}
              />
            </Grid>
          ))}
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <MuiAlert severity="success" elevation={6} variant="filled">
            Sucessfully added to the date selection.
          </MuiAlert>
        </Snackbar>
        <Snackbar
          open={openSnackbarError}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <MuiAlert severity="error" elevation={6} variant="filled">
            Already two pokemons selected for a date.
          </MuiAlert>
        </Snackbar>
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
