import React, {useEffect, useState} from "react";
import {CircularProgress, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {BASE_URL} from "../../constants";
import DateTable from "../../components/DateTable";
import DateFilters from "./DateFilters"

export default function Incubator() {
  const classes = useStyles();

  const [dates, setDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    let didCancel = false;
    setIsLoading(true)

    async function getDates() {
      var url = new URL(BASE_URL + "/dates/")

      // var params = {
      //   generations: selectedGenerations, types: selectedTypes.map((t) => capitalize(t.name))
      // }
      // url.search = new URLSearchParams(params).toString();

      const response = await fetch(url);
      const data = await response.json();
      setDates(data);

      console.log(data)

      setIsLoading(false);
      if (!didCancel) {
        console.log(data);
      }
    }

    getDates();

    return () => {
      console.log("incubator view unmounted...");
    };
  }, [setDates]);


  var content;
  if (isLoading) {
    content = <CircularProgress/>
  } else {
    content = <DateTable dates={dates}/>
  }

  return (
    <Grid
      container
      className={classes.root}
      alignItems="stretch"
      spacing={2}
      justify="space-evenly"
    >
      <Grid item xs={12}>
        <DateFilters/>
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));
