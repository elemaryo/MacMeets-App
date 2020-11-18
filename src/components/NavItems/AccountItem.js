import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, Settings, ExitToApp } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Omar from '../../images/omar.jpg';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: "white",
        paddingTop: '30%',
        '&:hover': {
          backgroundColor: "#810303"
        } 
      },
  
  }));

export default function AccountItem() {
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
            <IconButton className={classes.iconButton} onClick={handleClick}><AccountCircle /></IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <ListItemIcon><StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                 >
                <Avatar alt="Omar Elemary" src={Omar} />
                </StyledBadge></ListItemIcon>
                <ListItemText>Omar Elemary</ListItemText></MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText>Account Settings</ListItemText></MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon><ExitToApp/></ListItemIcon>
                <ListItemText>Log out</ListItemText></MenuItem>
            </Menu>
        </div>
    )
}