import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { Add, PresentToAll } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import annie from '../../images/annie.png';
import chad from '../../images/chad.png';
import han from '../../images/han.png';
import kelly from '../../images/kelly.png';
import yena from '../../images/yena.png';
import coding from "../../images/coding.jpeg";


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
    marginLeft:"35%"
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  typography: {
    fontWeight: 900,
  },

  flex: {
    display: 'flex',
    paddingTop: 10,
  },

}));

export default function SampleEvent() {
  const classes = useStyles();
  const [state, setstate] = useState(false);
  const handleState = () => setstate(!state);
  const handleClick = () => {
    alert("Added event to your calendar!");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
            <div>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card} onMouseOver={handleState} 
                onMouseOut={handleState}
                raised={state}>
                  <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={coding}
                    title="Programming Event"
                  />
                  <CardContent className={classes.cardContent}>
                  <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
                      Programming Principles @ Youtube
                    </Typography>
                    <ul>
                      <li><Typography className={classes.typography} align="left">SAT, NOV 21, 5:00 PM</Typography></li>
                      <li><Typography className={classes.typography} align="left">McMaster Programming Club</Typography></li>
                    </ul>
                    <div className={classes.flex}>
                    <AvatarGroup max={4}>
                        <Avatar alt="Annie Wing" src={annie} />
                        <Avatar alt="Chad Howard" src={chad} />
                        <Avatar alt="Han Baker" src={han} />
                        <Avatar alt="Kelly Walker" src={kelly} />
                        <Avatar alt="Yena Henderson" src={yena} />
                    </AvatarGroup>
                    <Typography className={classes.typography} style={{padding:9}}>18</Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button onClick={handleClick} size="small" startIcon={<Add />} className={classes.buttonRed}>
                      Add
                    </Button>
                    <Button size="small" startIcon={<PresentToAll />} className={classes.buttonRed}>
                      View
                    </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
          </Grid>  
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}