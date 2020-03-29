import React from "react";
import logo from "../resources/logo.svg";
import "../view/Home.css";

function Home(params) {
  return React.createElement("p", {}, "First test!");
}

function ReactRef(params) {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>It works! eh oui</p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ReactRef;
