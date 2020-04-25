import React, {useState} from 'react';
import {Grid, Typography, Card, CardContent, CardHeader, Divider, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));
const Rating = ({name, image, rating}) => {
  const [nameRating, setNameRating] = useState(0)
  const [imageRating, setImageRating] = useState(0)
  const [combinationRating, setCombinationRating] = useState(0)


  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Rating"></CardHeader>
      <CardContent>
        <div>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle1" display="block"> Overall Rating (132)</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle2" display="block">Name </Typography>
              <StarRatings
                rating={1}
                starDimension="25px"
                starSpacing="5px"
              />
              <Typography variant="subtitle2" display="block">Image</Typography>
              <StarRatings
                rating={4.403}
                starDimension="25px"
                starSpacing="5px"
              />
              <Typography variant="subtitle2" display="block">Combination</Typography>
              <StarRatings
                rating={2.8}
                starDimension="25px"
                starSpacing="5px"
              />
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider}/>
        <div>

          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle1" display="block">Your Rating</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle2" display="block">Name</Typography>
              <StarRatings
                rating={nameRating}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="red"
                changeRating={(rating) => setNameRating(rating)}
              />
              <Typography variant="subtitle2" display="block">Image</Typography>
              <StarRatings
                rating={imageRating}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="red"
                changeRating={(rating) => setImageRating(rating)}
              />
              <Typography variant="subtitle2" display="block">Combination</Typography>
              <StarRatings
                rating={combinationRating}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="red"
                changeRating={(rating) => setCombinationRating(rating)}
              />
              <br/>
              <br/>

              <Button variant="contained" color="primary">Post Rating</Button>
            </Grid>

          </Grid>
        </div>
      </CardContent>
    </Card>

  );
};

export default Rating;
