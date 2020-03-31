import React from "react";
import picture1 from "../../resources/pictures/IMG_7952.JPG";
import picture2 from "../../resources/pictures/IMG_7952.JPG";
import Header from "../Header/Header";

import "./Photography.css";

function Photography() {
  const title = "Photography";

  return (
    <div className>
      <Header title={title} link="/Photography" />
      <div className="Galery">
        <img src={picture1} />
        <img src={picture2} />
      </div>
    </div>
  );
}

export default Photography;
