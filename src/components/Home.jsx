import React from "react";
import Header from "./Template";

import "../view/Template.css";

function Home() {
  const title = "AMAURY BILLET";

  return (
    <div>
      <Header title={title} />
    </div>
  );
}

export default Home;
