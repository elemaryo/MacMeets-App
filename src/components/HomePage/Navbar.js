import React, {useState} from 'react';
import {
    HashRouter as Router,
    NavLink
  } from 'react-router-dom';
  
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';
import {Typography } from '@material-ui/core';
import AccountItem from '../NavItems/AccountItem';
import Searchbar from '../NavItems/Searchbar';
import GroupButton from '../NavItems/GroupButton';
import Notif from '../NavItems/Notifications';

const useStyles = makeStyles({
    icons: {
      color: "white", 
      paddingTop: '32%',
      '&:hover': {
        backgroundColor: "#810303"
      }
    },

    typography: {
        color: "white",
        fontWeight: 900,
        paddingTop: '1.5%',
    }
  });


export default function Navbar() {
    const classes = useStyles();
    return (
        <nav>
            <span className="nav-left">
                <NavLink to='/'><IconButton className={classes.icons}><Home /></IconButton></NavLink>
                <Typography variant="h5" className={classes.typography}>MacMeets</Typography>
                <Searchbar/> 
            </span>
            <span className="nav-right">
                <GroupButton/>
                <Notif/>
                <AccountItem></AccountItem>
            </span>
        </nav>
    )
}



