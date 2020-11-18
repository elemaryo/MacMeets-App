import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {
  NavLink
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '10px 20px 0px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 600,
      height: 40,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
      color: "black"
    },
  }));

export default function Searchbar() {
    const classes = useStyles();
    return (
        <div>
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search MacMeets"
                inputProps={{ 'aria-label': 'search macmeets' }}
            />
            <NavLink to="/Search Page">
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton></NavLink>
        </Paper>
        </div>
    )
}
