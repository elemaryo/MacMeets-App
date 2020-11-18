import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Notifications, ClearAll} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import {
    NavLink,
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

export default function Notif() {
    const classes = useStyles();
    const [clearNot,setClear] = useState(true)
    const [badgeNumber, setBadgeNumber] = useState(2)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClear = () => {
        setBadgeNumber(0);
        setClear(false);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton className={classes.iconButton} onClick={handleClick}><Badge badgeContent={badgeNumber} color="error"><Notifications /></Badge></IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            {clearNot ? <div><NavLink to="/Group Page"><MenuItem onClick={handleClose}> <ListItemText>Omar made a post in MPC!</ListItemText></MenuItem></NavLink>
            <NavLink to="/Group Page"><MenuItem onClick={handleClose}> <ListItemText>You joined MPC!</ListItemText></MenuItem></NavLink></div> :  <div></div>}
            <Divider />
            <MenuItem onClick={handleClear}>
                <ListItemIcon><ClearAll/></ListItemIcon>
                <ListItemText>Clear All</ListItemText></MenuItem>
            </Menu>
        </div>
    )
}
