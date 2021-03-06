import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TypeChip from "./TypeChip";
import {Grid, Typography, CardContent, Card} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import {toPokedexId} from "../services/utils";

import {BASE_URL} from "../constants";

const useStyles = makeStyles(() => ({
  card: {
    // height: "300px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
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
    width: "50%",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function PokemonCard({pokemon}) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (pokemon) => {
    history.push("/pokedex/" + pokemon.pokeDexId);
  };

  return (
    <Card className={classes.card}>
      <CardContent
        className={classes.card}
        onClick={() => handleClick(pokemon)}
      >
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {toPokedexId(pokemon.pokeDexId)}
        </Typography>
        <Typography className={classes.nameTitle}>{pokemon.name}</Typography>
        <br/>

        <img className={classes.image} src={BASE_URL + "/image/" + pokemon.pokeDexId.toString()} alt={pokemon.name}/>
        <br/>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <TypeChip typeName={pokemon.type1} size="small"/>
          </Grid>
          {pokemon.type2 !== "" && (
            <Grid item>
              <TypeChip typeName={pokemon.type2} size="small"/>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
