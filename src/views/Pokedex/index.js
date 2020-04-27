import React, {useState, useContext, useEffect} from "react";

import {BASE_URL, GENERATIONS, TYPES} from "../../constants";
import PokemonCard from "../../components/PokemonCard";
import {PokemonContext} from "../../context/PokemonContext";
import {Grid, CircularProgress, Snackbar} from "@material-ui/core";
import PokedexFilers from "./PokedexFilers";
import {makeStyles} from "@material-ui/core/styles";
import {capitalize} from "../../services/utils";

export default function Pokedex() {
  const classes = useStyles();

  const [pokemons, setPokemons] = useContext(PokemonContext);

  // filters
  const [selectedGenerations, setSelectedGenerations] = useState([1]);
  const [selectedTypes, setSelectedTypes] = useState(TYPES);

  // ui
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let didCancel = false;
    setIsLoading(true)

    async function getPokedex() {
      var url = new URL(BASE_URL + "/pokedex/")

      var params = {
        generations: selectedGenerations, types: selectedTypes.map((t) => capitalize(t.name))
      } // or:
      url.search = new URLSearchParams(params).toString();
      console.log(selectedGenerations)
      console.log(selectedTypes)

      console.log(url)

      const response = await fetch(url);
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
  }, [setPokemons, selectedGenerations, selectedTypes]);

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

  var content;

  if (isLoading || pokemons === null) {
    content = <CircularProgress/>
  } else {
    content = pokemons.slice(0, 100).map((pokemon) => (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id.counter}
        />
      </Grid>
    ))
  }


  return (
    <div className={classes.root}>
      <Grid container alignItems="stretch" spacing={2} justify="space-evenly">
        <Grid item xs={12}>
          <PokedexFilers selectedTypes={selectedTypes}
                         setSelectedTypes={setSelectedTypes}
                         selectedGenerations={selectedGenerations}
                         setSelectedGenerations={setSelectedGenerations}/>
        </Grid>
        {content}
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
