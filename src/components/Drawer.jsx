import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssessmentIcon from "@material-ui/icons/Assessment";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function SideDrawer(props) {
  return (
    <>
      <Drawer anchor="left" open={props.open} onClose={props.onClose}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar variant="rounded">
                <Typography variant="h5">L</Typography>
              </Avatar>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h5">Lorem Ipsum</Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText>Manage your account</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText>View your posts</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={10} color="primary">
                <NotificationsIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText>Notifications</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>Sign out</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
