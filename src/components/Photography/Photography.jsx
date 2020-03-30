import React from "react";
import background from "../../resources/pictures/IMG_7952.JPG";
import Header from "../Header/Header";

import "./Photography.css";

function Photography() {
  const title = "Photography";

  return (
    <div>
      <Header title={title} link="/Photography" />
      <img src={background} className="Galery" />
    </div>
  );
}

export default Photography;
