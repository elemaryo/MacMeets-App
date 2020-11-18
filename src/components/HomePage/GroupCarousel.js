import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import MPC from "../../images/MPC.jpg";
import Soccer from '../../images/soccerclub.jpg';
import Art from '../../images/McMasterArt.jpg';
import {
  NavLink,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      borderRadius: 25,
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        transform: "scale(1.1)",
        transition: "0.5s",
      }
    },
    cardMedia: {
      paddingTop: '50%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },

    typography: {
      fontWeight: 900,
      margin: '25px',
    },

    buttonRed: {
      color: "#6c0000",
    }

  }));
  
// const cards = [1, 2, 3];
export default function GroupCarousel() {
    const classes = useStyles();
    const [state, setstate] = useState(false);
    const handleState = () => setstate(!state);
    
    return (
        <div className="container">
        <Typography variant="h5" className={classes.typography}>Your groups</Typography>
        <Button style={{marginLeft:"50%"}} size="small" className={classes.buttonRed}>See all</Button>
        <div className="m20">
        <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
              <Container>
              <NavLink to="/Art Page">
                <Card className={classes.card} onMouseOver={handleState} 
                onMouseOut={handleState}
                raised={state}>
                  <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Art}
                    title="McMaster Art Club"
                  />
                    </CardActionArea>
                </Card>
                </NavLink>
                <Typography className={classes.typography}>McMaster Art Club</Typography>
                </Container>
              </Grid>


              <Grid item xs={12} sm={6} md={4}>
              <Container>
              <NavLink to="/Group Page">
                <Card className={classes.card} onMouseOver={handleState} 
                onMouseOut={handleState}
                raised={state}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={MPC}
                    title="McMaster Programming Club"
                  />
                  </CardActionArea>
                </Card>
                </NavLink>
                <Typography className={classes.typography}>McMaster Programming Club</Typography>
                </Container>
              </Grid>

              {/* <Grid item xs={12} sm={6} md={4}>
              <Container>
              <NavLink to="/Group Page">
                <Card className={classes.card} onMouseOver={handleState} 
                onMouseOut={handleState}
                raised={state}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Soccer}
                    title="McMaster Soccer Club"
                  />
                  </CardActionArea>
                </Card>
                </NavLink>
                <Typography className={classes.typography}>McMaster Soccer Club</Typography>
                </Container>
              </Grid> */}
          </Grid> 
          </div>
      </div>
    )
}
