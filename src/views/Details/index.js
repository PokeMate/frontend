import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { useParams } from "react-router-dom";
import TypeChip from "../../components/TypeChip";
import ProgressProperty from "../../components/ProgressProperty";
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

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({
    // id: 4,
    // name: "Example Pokemon",
    // url: "114.png",
    // types: ["bug", "water"],
    // attractiveness: 0.5,
    // fertility: 0.8,
    // fitness: 0.3,
    // preferred_types: ["grass", "poison"],
    // no_go_types: ["normal", "fire"],
    // no_gos: ["Slimy Pokemons", "Arrogant legendary Pokemons"],
  });
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
  }, []);

  const handleClick = () => {};

  if (isLoading || pokemon === null) {
    return <CircularProgress />;
  } else {
    return (
      <div>
        <Grid className={classes.root} container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.card} onClick={() => handleClick(pokemon)}>
              <CardContent className={classes.card}>
                <Typography variant="h6" color="textSecondary">
                  {toPokedexId(pokemon.pokeDexId)}
                </Typography>
                <Typography variant="h5" className={classes.nameTitle}>
                  {pokemon.name}
                </Typography>
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
                  <Grid item>
                    <TypeChip typeName={pokemon.type1} />
                  </Grid>
                  <Grid item>
                    <TypeChip typeName={pokemon.type2} />
                  </Grid>
                </Grid>
                <br />
                <ProgressProperty
                  progress={90}
                  emoji="🔥"
                  property="Attractivity"
                />
                <ProgressProperty
                  progress={40}
                  emoji="🌿"
                  property="Fertility"
                />
                <ProgressProperty progress={80} emoji="🏋️‍♀️" property="Fitness" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.buttonContainer}
        >
          <Grid item xs={6} sm={4} md={3}>
            <Button variant="contained" size="large" fullWidth color="primary">
              <span role="img" aria-label="fire">
                ❤️
              </span>
              Mate
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={3} className="buttonContainer">
            <Button variant="contained" size="large" fullWidth>
              <span role="img" aria-label="fire">
                🕸
              </span>
              Catch
            </Button>
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
  buttonContainer: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
