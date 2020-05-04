import React from "react";
import {Typography, Grid, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // background: "#ff6700",
  },
  emoji: {
    fontSize: "30px"
  },
  emojiGrid: {
    marginRight: theme.spacing(2)
  }
}));

export default function MatingPreference({
                                           property,
                                           index,
                                           emoji,
                                           childComponent
                                         }) {
  const classes = useStyles();

  return (
    <div>
      <Grid item container justify="center"
            alignItems="center" className={classes.paper}
      >
        <Grid item xs={1} className={classes.emojiGrid}>
          < Typography className={classes.emoji}>
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
          {childComponent}
        </Grid>
      </Grid>
      <Divider/>
    </div>
  );
}
