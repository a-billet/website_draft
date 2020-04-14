import React from "react";
import Typography from "@material-ui/core/Typography";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  about: {
    width: "100%",
    maxWidth: 700,
  },
});

function AboutMe() {
  const classes = useStyles();
  const title = "About Me";

  return (
    <div className={classes.root}>
      <Header title={title} />
      <div className={classes.about}>
        <Typography variant="h5" gutterBottom>
          Welcome to my website
        </Typography>
        <Typography variant="h5">Contact</Typography>
        <Typography variant="caption" display="block" gutterBottom>
          billet.amaury@gmail.com
        </Typography>
      </div>
    </div>
  );
}

export default AboutMe;
