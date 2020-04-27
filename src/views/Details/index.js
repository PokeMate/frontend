import React, {useEffect, useState, useContext} from "react";
import {BASE_URL} from "../../constants";
import {useParams, useHistory} from "react-router-dom";

import {NavigateNext, NavigateBefore} from "@material-ui/icons";
import DetailsCard from "../../components/DetailsCard";
import {CircularProgress, Grid, Button, Snackbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {toPokedexId} from "../../services/utils";
import {SelectionContext} from "../../context/SelectionContext";
import MuiAlert from "@material-ui/lab/Alert";
import Rating from "../../components/Rating"

export default function PokemonDetails() {
  const classes = useStyles();
  const history = useHistory();

  const [selection, setSelection] = useContext(SelectionContext);
  const [openSnackbarError, setOpenSnackbarError] = React.useState(false);

  const addToSelection = (pokemon) => {
    if (selection.pokemon1 === undefined) {
      setSelection({...selection, pokemon1: pokemon});
      history.push("/mate")
    } else if (selection.pokemon2 === undefined) {
      setSelection({...selection, pokemon2: pokemon});
      history.push("/mate")
    } else {
      setOpenSnackbarError(true);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  let {id} = useParams();

  useEffect(() => {
    let didCancel = false;

    async function getPokedex() {
      const response = await fetch(BASE_URL + "/pokedex/" + id);
      const data = await response.json();
      setPokemon(data[0]);
      setIsLoading(false);
      if (!didCancel) {
        console.log(data);
      }
    }

    getPokedex();
    return () => {
      console.log("pokedex component unmounted...");
    };
  }, [id]);

  const handleNavigation = (pokedexId) => {
    history.push("/pokedex/" + pokedexId.toString());
  };

  if (isLoading || pokemon === null) {
    return <CircularProgress/>;
  } else {
    return (
      <Grid container spacing={2} className={classes.root}>


        {/*navigation buttons*/}
        <Grid item container justify="center">
          <Grid item xs={12} spacing={2}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<NavigateBefore/>}
                  onClick={() => handleNavigation(pokemon.pokeDexId - 1)}
                >
                  {toPokedexId(pokemon.pokeDexId - 1)}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  endIcon={<NavigateNext/>}
                  onClick={() => handleNavigation(pokemon.pokeDexId + 1)}
                >
                  {toPokedexId(pokemon.pokeDexId + 1)}
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  color="secondary"
                  onClick={() => addToSelection(pokemon)}
                >
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                  Send on a date
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container justify="center" spacing={2}>

          {/*pokemon card*/}
          <Grid item xs={12} md={6}>
            <DetailsCard pokemon={pokemon}/>
          </Grid>

          {/*rating*/}
          <Grid item xs={12} md={6}>
            <Rating pokemon={pokemon}/>
          </Grid>
        </Grid>

        <Snackbar
          open={openSnackbarError}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbarError(false)}
        >
          <MuiAlert severity="error" elevation={6} variant="filled">
            Already two pokemons selected for a date.
          </MuiAlert>
        </Snackbar>
      </Grid>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));
