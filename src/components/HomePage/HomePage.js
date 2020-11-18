import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Categories from './Categories';
import Calen from './Calendar';
import Album from './Events';
import GroupCarousel from './GroupCarousel';


const useStyles = makeStyles((theme) => ({
    title: {
        margin: '30px'
    },

    typography: {
      fontWeight: 900,
  }
  }));

export default function HomePage() {
    const classes = useStyles();
    return (
        <div>
        <div>
            <div className={classes.title}>
            <Typography variant="h5" className={classes.typography}>Today you have a meeting at 8:30pm for soccer practice at Rotary Park</Typography>
            <Typography variant="h5" className={classes.typography}>for soccer practice at Rotary Park</Typography>
            </div>
            <Calen />
        </div>
        <div>
            <Categories/>
        </div>
            <GroupCarousel/>
            <Album/>
        </div>
    )
}


