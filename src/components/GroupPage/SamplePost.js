import React, { useState, useEffect } from "react";
import moment from "moment";
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Omar from '../../images/omar.jpg';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Bookmark, VerifiedUser } from "@material-ui/icons";
import { IconButton, Typography } from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { MoreHoriz, Delete } from '@material-ui/icons';
import SampleEvent from './SampleEvent';


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

function PostDelete(props) {
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
            <MenuItem onClick={props.onKey}>
                <ListItemIcon><Delete/></ListItemIcon>
                <ListItemText>Delete</ListItemText></MenuItem>
            </Menu>
        </div>
    )
}

  //{ details, myUID }
export default function SinglePost (props) {
    const [firstName, setFirstName] = useState("Omar");
    const [lastName, setLastName] = useState("Elemary");
    // const [content, setContent] = useState("");

    const content = props.content;
    // const name = props.name
    // const last = props.lastName

  return (
    <div>
      <div className="outerBox m10">
        <div>
          <div className="container_flexspace">
            <div style={{ display: "flex", marginBottom: 10 }}>
              <div>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                    variant="dot"
                 >
                <Avatar alt="Omar Elemary" src={Omar} />
                </StyledBadge>
                </div>
                <div>
                <div style={{marginLeft: "5px", fontWeight: 600}}>
                  {firstName} {lastName}
                  </div>
                  <div style={{marginLeft: "5px"}} className="container_flex">
                      <VerifiedUser fontSize="small"/>
                      President
                    </div>
                </div>
              </div>
                <div style={{ fontSize: 12, color: "gray" }}>
                    <div>
                  <Bookmark />
                  </div>
                  {/* <IconButton onClick={sendDel}><Delete/></IconButton> */}
                  {moment({content}.createdAt).fromNow()}
                </div>
              </div>

              {/* {myUID === details.createdBy && (
                <div>
                  <Dropdown
                    options={{
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      container: null,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }}
                    trigger={
                      <Button flat node="button">
                        <Icon>more_vert</Icon>
                      </Button>
                    }
                  >
                    <a href="w" style={{ color: "black" }}>
                      Edit
                    </a>
                    <a
                      href="w"
                      style={{ color: "black" }}
                      onClick={event => {
                        onPostDelete(event, details.postKey);
                      }}
                    >
                      Delete
                    </a>
                  </Dropdown>
                </div>
              )} */}

          </div>
          <div>
              {/* {details && details.content ? details.content : ""} */}
            <Typography align="left" paragraph="true">{content}</Typography>
            <SampleEvent />
            </div>
        </div>
      </div>
  );
};