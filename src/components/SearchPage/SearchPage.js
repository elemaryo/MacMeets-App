import React, {useState, useEffect} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import MPC from '../../images/MPC.jpg';
import {
    NavLink,
  } from 'react-router-dom';
import { LocalOffer } from '@material-ui/icons';
import SearchType from './SearchType';
import SearchCategory from './SearchCategory';
import SortResults from './SortResults';
import SearchEvent from './SearchEvent';
import LocationFilter from './LocationFilter';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      margin: "0 auto",
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  }));

function GroupSearch() {
    const classes = useStyles();
    const theme = useTheme();
    return(
        <div>
        <NavLink to="/Group Page">
        <Card style={{maxWidth: 580, marginLeft:"50px"}} className={classes.root}>
            <CardActionArea>
            <div className={classes.root}>
            <CardMedia
                component="img"
                className={classes.cover}
                alt="McMaster Programming Club"
                height="140"
                image={MPC}
                title="McMaster Programming Club"
                />
            <CardContent className={classes.content}>
            <Typography align="left" gutterBottom variant="h5" component="h2">
                McMaster Programming Club
            </Typography>
            <Typography align="left" variant="body2" color="textSecondary" component="p">
                A group for programming enthusiasts at McMaster!
            </Typography>
            <div style={{marginTop: "15px"}} className={classes.root}>
            <LocalOffer/><Typography align="center" style={{fontWeight: "900"}}>Academic</Typography>
            <LocalOffer/><Typography align="center" style={{fontWeight: "900"}}>Programming</Typography>
            <LocalOffer/><Typography align="center" style={{fontWeight: "900"}}>Within McMaster</Typography>
            </div>
                </CardContent>
                </div>
            </CardActionArea>
        </Card>
        </NavLink>
        </div>
    );
}
  

function SearchPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [type, setType] = useState('Group')
    const [category, setCategory] = useState("Academic")
    const [location, setLocation] = useState ("Within McMaster");

    const handleTypeChange = (type) => {
      setType(type)
    }

    const handleCatChange = (category) => {
      setCategory(category)
    }

    const handleLocationChange = (location) => {
      setLocation(location)
    }
    return (
        <div className="m20">
            <div className={classes.root}>
            {/* onCategoryChance is a prop that passes the func */}
            <SearchType onCategoryChange={handleTypeChange}/> 
            <SearchCategory onCategoryChange={handleCatChange}/>
            <SortResults />
            <LocationFilter onCategoryChange={handleLocationChange}/>
            <Divider />
            </div>
            <div className="m50">
            <Typography align="left" gutterBottom variant="h5" style={{fontWeight: "900", margin:"20px"}}>Showing results for "McMaster Programming Club"</Typography>
            {category === "Academic" & location === "Within McMaster" ?  <Typography align="left" style={{margin:"20px"}}>Showing 1 of 1 results</Typography> : <Typography align="left" style={{margin:"20px"}}>No results found</Typography> }
            <Divider style={{margin:"20px"}} />
              {category === "Academic" & location === "Within McMaster" ?  type === 'Event' ? <SearchEvent /> : <GroupSearch/> : <div></div> }
                {/* {type === 'Event' ? <SearchEvent /> : <GroupSearch/> }  */}
                <Divider style={{margin:"20px"}}/>
            </div>
            {category === "Academic" & location === "Within McMaster" ?  <div className="pushFooter2"></div> : <div className="pushFooter3"></div> }
            </div>
    )
}

export default SearchPage
