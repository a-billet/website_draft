import { Button } from "reactstrap";
import React from "react";
import Header from "./Header";
import "../view/Template.css";
import history from "./../history";

function Home() {
  const title = "AMAURY BILLET";

  return (
    <div className="home-page">
      <Header title={title} />
      <div className="page-content">
        <Button
          variant="contained"
          className="home-button"
          onClick={() => history.push("/Photography")}
        >
          Photography
        </Button>
        <Button
          variant="contained"
          className="home-button"
          onClick={() => history.push("/AboutMe")}
        >
          About Me
        </Button>
      </div>
    </div>
  );
}

export default Home;
