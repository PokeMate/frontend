import React from "react";
import TypeChip from "./TypeChip";
import ProgressProperty from "./ProgressProperty";
import {Grid, Typography, CardContent, Card, Divider} from "@material-ui/core";
import {toPokedexId} from "../services/utils";
import {makeStyles} from "@material-ui/core/styles";
import MatingPreference from "./MatingPreference";
import {BASE_URL} from "../constants";

export default function DetailsCard({pokemon}) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" color="textSecondary">
              {toPokedexId(pokemon.pokeDexId)}
            </Typography>
            <Typography variant="h5" className={classes.nameTitle}>
              {pokemon.name}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={2}
              direction="row"
              // justify="center"
              // alignItems="center"
            >
              <Grid item>
                <TypeChip typeName={pokemon.type1}/>
              </Grid>
              {pokemon.type2 !== "" && (
                <Grid item>
                  <TypeChip typeName={pokemon.type2}/>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <br/>
        <img className={classes.image} src={BASE_URL + "/image/" + pokemon.pokeDexId.toString()} alt={pokemon.name}/>
        <br/>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item xs={3}>
                <ProgressProperty
                  progress={Math.floor(pokemon.attractivity * 100)}
                  emoji="🔥"
                  property="Attractivity"
                  color="#ff6700"
                />
              </Grid>
              <Grid item xs={3}>
                <ProgressProperty
                  progress={Math.floor(pokemon.fertility * 100)}
                  emoji="🌿"
                  property="Fertility"
                  color="#519600"
                />
              </Grid>
              <Grid item xs={3}>
                <ProgressProperty progress={Math.floor(pokemon.fitness * 100)} emoji="🏋️‍♀️" property="Fitness"/>
              </Grid>
            </Grid>
            <br/>
            <Divider/>
          </Grid>

          {/* Fetishes */}
          {pokemon.fetisches !== null && pokemon.fetisches.map((fetish, index) => (
              <Grid item xs={12} key={index}>
                <MatingPreference
                  emoji={fetish.emoji}
                  property="Fetish"
                  index={(index + 1).toString()}
                  childComponent={<Typography>{fetish.fetish}</Typography>}
                />
              </Grid>
            )
          )}

          {/* Nogos */}
          {pokemon.nogos !== null && pokemon.nogos.map((nogo, index) => (
              <Grid item xs={12} key={index}>
                <MatingPreference
                  emoji="❌"
                  property="Nogo"
                  index={(index + 1).toString()}
                  childComponent={<Typography>{nogo.nogo}</Typography>}
                />
              </Grid>
            )
          )}

          {/* Attracted Types */}
          {
            pokemon.attractedTypes !== null && pokemon.attractedTypes.length !== 0 && <Grid item xs={12}>
              <MatingPreference
                emoji="😍"
                property="Attracted Types"
                index="all"
                childComponent={(
                  <Grid item container spacing={1} direction="row">
                    {
                      pokemon.attractedTypes.map((type) => (
                        <Grid item key={type}>
                          <TypeChip typeName={type}/>
                        </Grid>
                      ))
                    }
                  </Grid>
                )}
              />
            </Grid>
          }


          {/* Nogo Types */}
          {
            pokemon.nogoTypes !== null && pokemon.nogoTypes.length !== 0 && <Grid item xs={12}>
              <MatingPreference
                emoji="🤮"
                property="Nogo Types"
                index="all"
                childComponent={(
                  <Grid item container spacing={1} direction="row">
                    {
                      pokemon.nogoTypes.map((type) => (
                        <Grid item key={type}>
                          <TypeChip typeName={type}/>
                        </Grid>
                      ))
                    }
                  </Grid>
                )}
              />
            </Grid>
          }
        </Grid>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  nameTitle: {
    fontSize: "vi",
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: "300px",
  },
  emoji: {
    fontSize: "30px",
    marginRight: theme.spacing(2)
  },
}));
