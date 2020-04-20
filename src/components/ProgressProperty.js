import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Typography } from "@material-ui/core";

export default function ProgressProperty({ progress, emoji, property, color }) {
  return (
    <div
      style={
        {
          // margin: "20px"
        }
      }
    >
      <CircularProgressbarWithChildren
        value={progress}
        styles={buildStyles({
          pathColor: color,
        })}
      >
        <Typography variant="body1">
          <span role="img" aria-label="emoji" style={{ fontSize: "30px" }}>
            {emoji}
          </span>
        </Typography>
        <Typography variant="body1">{property}</Typography>
        <Typography variant="body1">
          <strong>{progress}%</strong>
        </Typography>
      </CircularProgressbarWithChildren>
    </div>
  );
}
