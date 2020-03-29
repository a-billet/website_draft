import React from "react";
import background from "../resources/pictures/IMG_7952.JPG";
import Header from "./Template";

import "../view/Template.css";

function Photography() {
  const title = "Photography";

  return (
    <div>
      <Header title={title} />
      <img src={background} className="Galery" />
    </div>
  );
}

export default Photography;
