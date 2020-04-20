import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { useParams, useHistory } from "react-router-dom";
import TypeChip from "../../components/TypeChip";
import MatingPreference from "../../components/MatingPreference";
import ProgressProperty from "../../components/ProgressProperty";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

import {
  CircularProgress,
  Grid,
  Typography,
  Button,
  CardContent,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toPokedexId } from "../../services/utils";
import exampleImg from "./114.png";

export default function PokemonDetails() {
  const classes = useStyles();
  const history = useHistory();

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

  const handleClick = () => {};
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
            <Card className={classes.card} onClick={() => handleClick(pokemon)}>
              <CardContent className={classes.card}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6" color="textSecondary">
                      {toPokedexId(pokemon.pokeDexId)}
                    </Typography>
                    <Typography variant="h5" className={classes.nameTitle}>
                      {pokemon.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      spacing={2}
                      direction="row"
                      // justify="center"
                      // alignItems="center"
                    >
                      <Grid item>
                        <TypeChip typeName={pokemon.type1} />
                      </Grid>
                      {pokemon.type2 !== "" && (
                        <Grid item>
                          <TypeChip typeName={pokemon.type2} />
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <br />
                <img
                  className={classes.image}
                  src={exampleImg}
                  alt={pokemon.name}
                />
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                    >
                      <Grid item xs={3}>
                        <ProgressProperty
                          progress={90}
                          emoji="🔥"
                          property="Attractivity"
                          color="#ff6700"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <ProgressProperty
                          progress={40}
                          emoji="🌿"
                          property="Fertility"
                          color="#519600"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <ProgressProperty
                          progress={80}
                          emoji="🏋️‍♀️"
                          property="Fitness"
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <MatingPreference
                      emoji="🧲"
                      property="Fettish"
                      index="1"
                      sentence="Likes slimy Pokemons."
                    />
                  </Grid>

                  <Grid item>
                    <MatingPreference
                      emoji="🧲"
                      property="Fettish"
                      index="2"
                      sentence="Prefers Pokemons with BMI < 24."
                    />
                  </Grid>
                  <Grid item>
                    <MatingPreference
                      emoji="❌"
                      property="Nogo"
                      index="1"
                      sentence="Dislikes arrogant legendary Pokemons"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
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
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  color="primary"
                >
                  <span role="img" aria-label="fire">
                    ❤️
                  </span>
                  Mate
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" size="large" fullWidth>
                  <span role="img" aria-label="fire">
                    🕸
                  </span>
                  Catch
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
