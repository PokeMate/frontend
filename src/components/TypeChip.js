import React from "react";
import { Chip, Avatar } from "@material-ui/core";
import { getType } from "../services/utils";

export default function TypeChip({ typeName }) {
  typeName = typeName.toLowerCase();
  return (
    <Chip
      label={getType(typeName).name}
      style={{
        backgroundColor: getType(typeName).color,
      }}
      avatar={<Avatar src={getType(typeName).icon} />}
    />
  );
}
