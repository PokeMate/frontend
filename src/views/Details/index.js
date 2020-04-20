import React, { useEffect, useState, useContext } from "react";
import { BASE_URL } from "../../constants";
import { useParams, useHistory } from "react-router-dom";

import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import DetailsCard from "../../components/DetailsCard";
import { CircularProgress, Grid, Button, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toPokedexId } from "../../services/utils";
import { SelectionContext } from "../../context/SelectionContext";
import MuiAlert from "@material-ui/lab/Alert";

export default function PokemonDetails() {
  const classes = useStyles();
  const history = useHistory();

  const [selection, setSelection] = useContext(SelectionContext);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openSnackbarError, setOpenSnackbarError] = React.useState(false);

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

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  let { id } = useParams();

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
    return <CircularProgress />;
  } else {
    return (
      <div>
        <Grid container justify="center" className={classes.buttons}>
          <Grid item xs={12} sm={8} md={6}>
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
                  startIcon={<NavigateBefore />}
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
                  endIcon={<NavigateNext />}
                  onClick={() => handleNavigation(pokemon.pokeDexId + 1)}
                >
                  {toPokedexId(pokemon.pokeDexId + 1)}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <DetailsCard pokemon={pokemon} />
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.buttons}>
          <Grid item xs={12} sm={8} md={6}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={2}
            >
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
  card: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
  },
  nameTitle: {
    fontSize: "vi",
  },
  spacer: {
    flex: 1,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: "300px",
  },
  buttons: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
