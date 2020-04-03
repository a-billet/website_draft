import React from "react";
import "./Header.css";
import history from "../../history";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import FaceSharpIcon from "@material-ui/icons/FaceSharp";
import GroupAddSharpIcon from "@material-ui/icons/GroupAddSharp";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

function Header(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => history.push("/Home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push("/Photography")}>
          <ListItemIcon>
            <PhotoCameraIcon />
          </ListItemIcon>
          <ListItemText primary="Photography" />
        </ListItem>
        <ListItem button onClick={() => history.push("/AboutMe")}>
          <ListItemIcon>
            <FaceSharpIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button onClick={() => history.push("/AboutMe")}>
          <ListItemIcon>
            <GroupAddSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Toolbar variant="dense">
        {["left"].map(anchor => (
          <React.Fragment key={anchor}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
            <Typography variant="h6" color="inherit">
              {props.title}
            </Typography>
          </React.Fragment>
        ))}
      </Toolbar>
    </div>
  );
}

export default Header;
