import React from "react";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import history from "../../history";
import VoyageBackground from "../../resources/galery/trip/IMG_7952.JPG";
import Portraitground from "../../resources/galery/portrait/IMG_5458.JPG";
import WildlifeBackground from "../../resources/galery/wildlife/IMG_2434.jpg";

import "./Photography.css";

const images = [
  {
    url: `url(${VoyageBackground})`,
    title: "VOYAGE",
    width: "33.33%",
    height: "93vh",
    route: "/voyage",
  },
  {
    url: `url(${Portraitground})`,
    title: "PORTRAIT",
    width: "33.33%",
    height: "93vh",
    route: "/portrait",
  },
  {
    url: `url(${WildlifeBackground})`,
    title: "WILDLIFE",
    width: "33.33%",
    height: "93vh",
    route: "/wildlife",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function Photography() {
  const title = "PHOTOGRAPHY";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={title} />
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              height: image.height,
            }}
            onClick={() => history.push(image.route)}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: image.url,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </div>
  );
}

export default Photography;
