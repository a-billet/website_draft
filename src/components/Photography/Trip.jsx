import React from "react";
import Header from "../Header/Header";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Zoom from "react-medium-image-zoom";
import photos from "./data/trip_photos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "70%",
  },
}));

function Trip() {
  const title = "VOYAGE";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={title} />
      <div className={classes.root}>
        <GridList cellHeight={400} className={classes.gridList} cols={3}>
          {photos.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <Zoom zoomMargin={40} overlayBgColorEnd="#212121">
                <picture>
                  <img
                    alt={tile.title}
                    src={tile.img}
                    openText={tile.title}
                    style={{ height: 400 }}
                  />
                </picture>
              </Zoom>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default Trip;
