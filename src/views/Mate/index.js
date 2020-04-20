import React, { useState, useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DetailsCard from "../../components/DetailsCard";
import { useHistory } from "react-router-dom";
import { SelectionContext } from "../../context/SelectionContext";

export default function Mate() {
  const [selection, setSelection] = useContext(SelectionContext);

  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12}>
            {selection.pokemon1 !== undefined && (
              <Button
                fullWidth
                onClick={() =>
                  setSelection({ ...selection, pokemon1: undefined })
                }
                color="primary"
              >
                Remove from Selection
              </Button>
            )}
            {selection.pokemon1 === undefined && (
              <Button
                fullWidth
                onClick={() => history.push("/pokedex")}
                color="primary"
                variant="contained"
              >
                Select Pokemon from Pokedex
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            {selection.pokemon1 !== undefined && (
              <DetailsCard pokemon={selection.pokemon1} />
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12}>
            {selection.pokemon2 !== undefined && (
              <Button
                fullWidth
                onClick={() =>
                  setSelection({ ...selection, pokemon2: undefined })
                }
                color="primary"
              >
                Remove from Selection
              </Button>
            )}
            {selection.pokemon2 === undefined && (
              <Button
                fullWidth
                onClick={() => history.push("/pokedex")}
                color="primary"
                variant="contained"
              >
                Select Pokemon from Pokedex
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            {selection.pokemon2 !== undefined && (
              <DetailsCard pokemon={selection.pokemon2} />
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        Summary
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          disabled={
            selection.pokemon1 === undefined || selection.pokemon2 === undefined
          }
        >
          Send on a date
        </Button>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
