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
  Typography,
  Avatar
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {toPokedexId} from "../services/utils";
import moment from "moment";
import {BASE_URL} from "../constants";


const useStyles = makeStyles({
  table: {
    minWidth: "650px",
  },
  avatar: {
    marginRight: "10px"
  }
});

const wasSuccessfull = ({babyId, endDate}) => {
  return endDate !== null && babyId !== null;
}


const DateTable = ({dates}) => {
  const classes = useStyles();
  const history = useHistory();

  const BabyIdButton = ({date}) => {
    if (wasSuccessfull(date)) {
      return <Button onClick={() => history.push("/pokedex/" + date.pokeBaby.pokeDexId.toString())}>
        <Avatar alt="pokemon avatar" src={BASE_URL + "/image/" + date.pokeBaby.pokeDexId.toString()}
                className={classes.avatar}/>
        {toPokedexId(date.pokeBaby.pokeDexId)} {date.pokeBaby.name}
      </Button>
    } else if (date.finished) {
      return <Typography> <span role="img" aria-label="clock emoji">⏳ ongoing</span></Typography>
    } else {
      return <Typography><span role="img" aria-label="clock emoji">💔 No Match</span></Typography>
    }
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Baby Pokemon</TableCell>
            <TableCell align="left">Date Start</TableCell>
            <TableCell align="left">Parent 1</TableCell>
            <TableCell align="left">Parent 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dates.map((date) => (


            date.pokemon1 !== null && <TableRow key={date.id.counter}>
              <TableCell align="left">
                <BabyIdButton date={date} history={history}/>
              </TableCell>
              <TableCell align="left">{moment.unix(date.id.timestamp).fromNow()}</TableCell>
              <TableCell align="left">
                <Button onClick={() => history.push("/pokedex/" + date.pokemon1.pokeDexId.toString())}>
                  <Avatar alt="pokemon avatar" src={BASE_URL + "/image/" + date.pokemon1.pokeDexId.toString()}
                          className={classes.avatar}/>
                  {toPokedexId(date.pokemon1.pokeDexId)} {date.pokemon1.name}
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button onClick={() => history.push("/pokedex/" + date.pokemon2.pokeDexId.toString())}>
                  <Avatar alt="pokemon avatar" src={BASE_URL + "/image/" + date.pokemon2.pokeDexId.toString()}
                          className={classes.avatar}/>
                  {toPokedexId(date.pokemon2.pokeDexId)} {date.pokemon2.name}
                </Button>
              </TableCell>

            </TableRow>


          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default DateTable;
