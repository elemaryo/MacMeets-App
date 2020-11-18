import React, {useState} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { MoreHoriz, Edit, Delete } from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// const useStyles = makeStyles((theme) => ({
//     iconButton: {
//         color: "white",
//         paddingTop: '30%',
//         '&:hover': {
//           backgroundColor: "#810303"
//         } 
//       },
  
//   }));

export default function PostEdit() {
    // const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}><MoreHoriz /></IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <ListItemIcon><Edit/></ListItemIcon>
                <ListItemText>Edit</ListItemText></MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon><Delete/></ListItemIcon>
                <ListItemText>Delete</ListItemText></MenuItem>
            </Menu>
        </div>
    )
}