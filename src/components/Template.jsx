import React from "react";
import "../view/Template.css";

function Header(props) {
  return (
    <div>
      <header className="Header">
        <h1> {props.title} </h1>
      </header>
    </div>
  );
}

export default Header;
