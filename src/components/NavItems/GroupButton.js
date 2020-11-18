import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Apps, Add, Bookmark} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import MPC from '../../images/MPC.jpg';
import Art from '../../images/McMasterArt.jpg';
import Soccer from '../../images/soccerclub.jpg';
import Avatar from '@material-ui/core/Avatar';
import {
    NavLink
  } from 'react-router-dom';
  

const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: "white", 
        paddingTop: '30%',
        '&:hover': {
            backgroundColor: "#810303"
          }
      },
  
  }));

export default function GroupButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <IconButton className={classes.iconButton} onClick={handleClick}><Apps /></IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <NavLink to="/Group Page">
            <MenuItem onClick={handleClose}>
                <ListItemIcon><Avatar alt="MPC" src={MPC} /></ListItemIcon>
                <ListItemText>McMaster Programming Club</ListItemText></MenuItem></NavLink>
                <NavLink to="/Soccer Page">
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon><Avatar alt="MPC" src={Soccer} /></ListItemIcon>
                    <ListItemText>McMaster Soccer Club</ListItemText></MenuItem></NavLink>
                <NavLink to="/Art Page">
            <MenuItem onClick={handleClose}>
                <ListItemIcon><Avatar alt="Art Club" src={Art} /></ListItemIcon>
                <ListItemText>McMaster Art Club</ListItemText></MenuItem></NavLink>
            <Divider></Divider>
            <NavLink to="/Create a group">
            <MenuItem onClick={handleClose}>
                <ListItemIcon><Add/></ListItemIcon>
                <ListItemText>Create Group</ListItemText>
                </MenuItem>
                </NavLink>
            </Menu>
        </div>
    )
}
