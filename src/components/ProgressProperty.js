import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {Typography} from "@material-ui/core";
import withWidth from '@material-ui/core/withWidth';

function ProgressProperty({progress, emoji, property, color, width}) {
  return (
    <CircularProgressbarWithChildren
      value={progress}
      styles={buildStyles({
        pathColor: color,
      })}
    >
      <Typography variant="body1">
          <span role="img" aria-label="emoji" style={{fontSize: "30px"}}>
            {emoji}
          </span>
      </Typography>
      {
        width !== 'xs' &&
        <Typography variant="body1">{property}</Typography>

      }
      {
        width !== 'xs' &&
        <Typography variant="body1">
          <strong>{progress}%</strong>
        </Typography>
      }


    </CircularProgressbarWithChildren>
  );
}

export default withWidth()(ProgressProperty)