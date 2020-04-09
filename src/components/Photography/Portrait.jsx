import React from "react";
import "./Photography.css";
import grey from "@material-ui/core/colors/grey";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import photos from "./data/portrait_photos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "100%",
    backgroundColor: grey[100],
  },
  gridList: {
    width: "60%",
  },
}));

function Potrait() {
  const title = "PORTRAIT";
  const classes = useStyles();
  return (
    <div className="Photography">
      <Header title={title} />
      <div className={classes.root}>
        <GridList cellHeight={400} className={classes.gridList} cols={3}>
          {photos.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Potrait;
