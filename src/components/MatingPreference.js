import React from "react";
import {Paper, Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    // background: "#ff6700",
  },
  emoji: {
    fontSize: "30px"
  }
}));

export default function MatingPreference({
                                           property,
                                           index,
                                           emoji,
                                           sentence
                                         }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} spacing={1}>
      <Grid container alignItems="center"
      >
        <Grid item xs={2}>
          <Typography className={classes.emoji}>
        <span role="img" aria-label="emoji">
          {emoji}
        </span>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography>
            <span style={{color: "#A9A9A9"}}>
          {property} #{index}
        </span>
          </Typography>
          <Typography>{sentence}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
