import React from "react";
import PokemonCard from "./PokemonCard";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function PokemonGrid({ pokemons }) {
  const classes = useStyles();

  return <div></div>;
}
