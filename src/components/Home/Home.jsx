import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import LeftBackground from "../../resources/galery/trip/IMG_7663.jpg";
import RightBackground from "../../resources/ABOUT_ME.jpg";
import history from "../../history";

const images = [
  {
    url: `url(${LeftBackground})`,
    title: "PHOTOGRAPHY",
    width: "50%",
    height: "93vh",
    route: "/photography",
  },
  {
    url: `url(${RightBackground})`,
    title: "ABOUT ME",
    width: "50%",
    height: "93vh",
    route: "/about",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    height: "500",
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

function Home() {
  const title = "AMAURY BILLET";
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

export default Home;
