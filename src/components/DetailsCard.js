import React from "react";
import TypeChip from "./TypeChip";
import ProgressProperty from "./ProgressProperty";
import { Grid, Typography, CardContent, Card } from "@material-ui/core";
import { toPokedexId } from "../services/utils";
import { makeStyles } from "@material-ui/core/styles";
import exampleImg from "./114.png";
import MatingPreference from "./MatingPreference";

export default function DetailsCard({ pokemon }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
        <img className={classes.image} src={exampleImg} alt={pokemon.name} />
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
                <ProgressProperty progress={80} emoji="🏋️‍♀️" property="Fitness" />
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
  );
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
