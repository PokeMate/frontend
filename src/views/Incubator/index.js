import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Incubator() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignItems="stretch"
      spacing={2}
      justify="space-evenly"
    >
      <Grid item>dateFilters</Grid>
      <Grid item>dates</Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
