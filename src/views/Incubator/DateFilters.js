import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const DateFilters = () => {
  const classes = useStyles();

  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item>
        Filters
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));


export default DateFilters;
