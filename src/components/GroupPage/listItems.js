import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import { DoubleArrow, Forum, Info, Policy, Event, Settings, Share, ExitToApp, Bookmark, NotificationImportant, VideoCall } from '@material-ui/icons';
import { Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MPC from '../../images/MPC.jpg';
import Soccer from '../../images/soccerclub.jpg';
import Art from '../../images/McMasterArt.jpg';
import annie from '../../images/annie.png';
import chad from '../../images/chad.png';
import han from '../../images/han.png';
import kelly from '../../images/kelly.png';
import yena from '../../images/yena.png';
import Omar from '../../images/omar.jpg';

const handleClick = () => {
  alert("Your group has been pinned!");
}

export const groupInfo1 = (
  <div>
    {/* {groupname} */}
  <img width="200" src={MPC} alt="McMaster Programming Club"/>
  <Typography>McMaster Programming Club</Typography>
  <Typography>BSB Building, McMaster University EST</Typography>
  {/* <div className="form_container">
  <Typography>462 members</Typography> */}
  <ListItem inset>
    <ListItemText style={{paddingLeft: "50px"}} primary="462 members" />
  <AvatarGroup style={{paddingRight: "30px"}} max={4}>
  <Avatar alt="Annie Wing" src={annie} />
    <Avatar alt="Chad Howard" src={chad} />
    <Avatar alt="Han Baker" src={han} />
    <Avatar alt="Kelly Walker" src={kelly} />
    <Avatar alt="Yena Henderson" src={yena} />
  </AvatarGroup>
  </ListItem>
  {/* </div> */}
  </div>
)

export const groupInfo2 = (
  <div>
    {/* {groupname} */}
  <img width="200" src={Art} alt="McMaster Art Club"/>
  <Typography>McMaster Art Club</Typography>
  <Typography>McMaster University EST</Typography>
  {/* <div className="form_container">
  <Typography>462 members</Typography> */}
  <ListItem inset>
    <ListItemText style={{paddingLeft: "50px"}} primary="1 member" />
    <Avatar style={{marginRight: "30px"}} alt="Omar Elemary" src={Omar} />
  </ListItem>
  {/* </div> */}
  </div>
)

export const groupInfo3 = (
  <div>
    {/* {groupname} */}
  <img width="200" src={Soccer} alt="McMaster Spccer Club"/>
  <Typography>McMaster Soccer Club</Typography>
  <Typography>DBAC, McMaster University EST</Typography>
  {/* <div className="form_container">
  <Typography>462 members</Typography> */}
  <ListItem inset>
    <ListItemText style={{paddingLeft: "50px"}} primary="30 members" />
  <AvatarGroup style={{paddingRight: "30px"}} max={4}>
    <Avatar alt="Yena Henderson" src={yena} />
    <Avatar alt="Kelly Walker" src={kelly} />
    <Avatar alt="Annie Wing" src={annie} />
    <Avatar alt="Chad Howard" src={chad} />
    <Avatar alt="Han Baker" src={han} />
  </AvatarGroup>
  </ListItem>
  {/* </div> */}
  </div>
)


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Forum />
      </ListItemIcon>
      <ListItemText primary="Discussion" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Info />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Policy />
      </ListItemIcon>
      <ListItemText primary="Policy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Group Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset style={{float:"left"}}>Channels</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DoubleArrow />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DoubleArrow />
      </ListItemIcon>
      <ListItemText primary="Programming" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DoubleArrow />
      </ListItemIcon>
      <ListItemText primary="Resources" />
    </ListItem>
  </div>
);

export const ThirdListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <VideoCall />
      </ListItemIcon>
      <ListItemText primary="Create Event" />
    </ListItem>
    <ListItem button onClick={handleClick}>
      <ListItemIcon>
        <Bookmark />
      </ListItemIcon>
      <ListItemText primary="Pin Group" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Share />
      </ListItemIcon>
      <ListItemText primary="Share Group" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NotificationImportant />
      </ListItemIcon>
      <ListItemText primary="Manage Notifications" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Leave Group" />
    </ListItem>
  </div>
);