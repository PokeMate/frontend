import React, { useState } from "react";
import {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  ExpansionPanel,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Grid,
  Chip,
  Avatar,
  Switch,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

import { GENERATIONS, TYPES } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  filter: {
    marginBottom: "12px",
  },
  chip: {
    margin: "5px 10px 5px 0px",
  },
}));

export default function PokedexFilers() {
  const classes = useStyles();
  const [selectedGenerations, setSelectedGenerations] = useState(
    Array(GENERATIONS.length).fill(true)
  );

  const [owned, setOwned] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState(TYPES);

  const handleOwned = () => {
    setOwned(!owned);
  };

  const handleGenerationFilter = (gen) => {
    var arr = selectedGenerations.map((value, index) => {
      if (index + 1 !== gen) return value;
      else return !value;
    });
    setSelectedGenerations(arr);
  };

  const selectType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t.name !== type.name));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Filters</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item xs={12} className={classes.filter}>
            <FormLabel>Owner</FormLabel>
            <FormGroup name="owner" aria-label="owner" value={"owner"} row>
              <FormControlLabel
                control={
                  <Switch checked={owned} onChange={handleOwned} name="owner" />
                }
                label="only show my captured Pokemons"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12} className={classes.filter}>
            <FormLabel>Generation</FormLabel>
            <FormGroup
              name="generation"
              aria-label="generation"
              value={"generation"}
              row
            >
              {GENERATIONS.map((gen) => (
                <FormControlLabel
                  key={gen}
                  control={
                    <Checkbox
                      checked={selectedGenerations[gen - 1]}
                      onClick={() => handleGenerationFilter(gen)}
                      name={gen.toString()}
                    />
                  }
                  label={gen.toString()}
                />
              ))}
            </FormGroup>
          </Grid>
          <Grid item className={classes.filter}>
            <FormLabel>Types</FormLabel>
            <FormGroup row>
              {TYPES.map((type) => (
                <Chip
                  className={classes.chip}
                  onClick={() => selectType(type)}
                  key={type.name}
                  label={type.name}
                  style={{
                    backgroundColor: selectedTypes.includes(type)
                      ? type.color
                      : "#f2f2f2",
                  }}
                  avatar={<Avatar src={type.icon} />}
                />
              ))}
            </FormGroup>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
