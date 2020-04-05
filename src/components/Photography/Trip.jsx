import React from "react";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

function Trip() {
  const title = "VOYAGE";
  return (
    <div className="home-page">
      <Header title={title}>
        <Divider orientation="vertical" flexItem />
        <Typography>TEST</Typography>
      </Header>
    </div>
  );
}

export default Trip;
