import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {toPokedexId} from "../services/utils";
import moment from "moment";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const isFinished = ({dateEnd}) => {
  return dateEnd !== null;
}

const wasSuccessfull = ({babyId, endDate}) => {
  return endDate !== null && babyId !== null;
}


const DateTable = ({dates}) => {
  const classes = useStyles();
  const history = useHistory();


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Baby Pokemon</TableCell>
            <TableCell align="right">Date Start</TableCell>
            <TableCell align="right">Date End</TableCell>
            <TableCell align="right">Parent 1</TableCell>
            <TableCell align="right">Parent 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dates.map((date) => (
            <TableRow key={date.dateId}>
              <TableCell align="left">
                <BabyIdButton date={date} history={history}/>
              </TableCell>
              <TableCell align="right">{moment.unix(date.dateStart).fromNow()}</TableCell>
              <TableCell align="right">
                {isFinished(date) ?
                  moment.unix(date.dateEnd).fromNow() :
                  <Typography> <span role="img" aria-label="clock emoji">⏳ ongoing</span></Typography>
                }
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => history.push("/pokedex/" + date.parent1Id.toString())}>
                  {toPokedexId(date.parent1Id)}
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => history.push("/pokedex/" + date.parent2Id.toString())}>
                  {toPokedexId(date.parent2Id)}
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const BabyIdButton = ({date, history}) => {
  if (wasSuccessfull(date)) {
    return <Button onClick={() => history.push("/pokedex/" + date.babyId.toString())}>
      {toPokedexId(date.babyId)}
    </Button>
  } else if (!isFinished(date)) {
    return <Typography> <span role="img" aria-label="clock emoji">⏳ ongoing</span></Typography>
  } else {
    return <Typography><span role="img" aria-label="clock emoji">💔 No Match</span></Typography>
  }
}

export default DateTable;
