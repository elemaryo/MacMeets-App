import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core'
import Arts from '../../images/Arts.jpg';
import Academic from '../../images/Academic.jpg'
import Cultures from '../../images/Cultures.jpg';
import Games from '../../images/Games.jpeg';
import Music from '../../images/Music.jpg';
import Religion from '../../images/Religions.png'
import Social from '../../images/Social.jpg';
import Sports from '../../images/Sports.jpg';
import Tech from '../../images/Tech.jpg';
import {
  NavLink,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },

    card: {
      display: 'flex',
      borderRadius: 10,
      boxShadow: '1.5px 1.5px'
    },

    cover: {
      minWidth: 115,
    },

    typography: {
      fontWeight: 900,
      margin: '25px',
  },

  title: {
    fontWeight: 700, 
    }
  }));

function Categories() {
    const classes = useStyles();
    const [state, setstate] = useState({
      Arts: "Arts & Crafts",
      Academic: "Academic",
      Cultural: "Cultural",
      Games: "Games & Recreation",
      Music: "Music",
      Social: "Social",
      Sports: "Sports & Fitness",
      Religion: "Religion/Spiritual",
      Tech: "Tech/Organization"
    })

    return (
        <div className="container">
            <Typography variant="h5" className={classes.typography}>Find your next group</Typography>
            <Grid className={classes.root} container spacing={3}>
              <Grid item xs={3}>
              <NavLink to="/Search Page">
                  <Card className={classes.card}>
                    <CardMedia
                    className={classes.cover}
                    image={Arts}
                    title="Arts"
                    />
                    <CardActionArea>
                    <CardContent className={classes.content}>
                      <Typography className={classes.title}>{state.Arts}</Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                  </NavLink>
              </Grid>

              <Grid item xs={3}>
              <NavLink to="/Search Page">
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Academic}
                  title="Academic"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Academic}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
                </NavLink>
              </Grid>

              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Cultures}
                  title="Cultural"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Cultural}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              </Grid>

              <Grid className={classes.root} container spacing={3}>
              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Games}
                  title="Games"
                  />
                  <CardActionArea>
                  <CardContent className={classes.content}>
                    <Typography className={classes.title}>{state.Games}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Music}
                  title="Music"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Music}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Social}
                  title="Social"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Social}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
              </Grid>

              <Grid className={classes.root} container spacing={3}>
              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Sports}
                  title="Sports"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Sports}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Religion}
                  title="Religion"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Religion}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={3}>
              <Card className={classes.card}>
                  <CardMedia
                  className={classes.cover}
                  image={Tech}
                  title="Tech"
                  />
                  <CardActionArea>
                  <CardContent>
                    <Typography className={classes.title}>{state.Tech}</Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
        </div>
    )
}

export default Categories
