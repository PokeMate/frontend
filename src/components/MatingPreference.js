import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    // background: "#ff6700",
  },
}));

export default function MatingPreference({
  property,
  index,
  emoji,
  sentence,
  color,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography>
        <span role="img" aria-label="emoji">
          {emoji}
        </span>
        <span style={{ color: "#A9A9A9" }}>
          {property} #{index}
        </span>
      </Typography>
      <Typography>{sentence}</Typography>
    </Paper>
  );
}
