import React from "react";

import { LinearProgress, Grid, Typography } from "@material-ui/core";

export default function ProgressProperty({ progress, emoji, property, theme }) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6} md={3}>
        <Typography variant="body1" gutterBottom>
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
          <span> {property}</span>
        </Typography>
      </Grid>
      <Grid item xs={6} md={9} justify="center" alignItems="center">
        <LinearProgress variant="buffer" value={progress} valueBuffer={100} />
      </Grid>
    </Grid>
  );
}
