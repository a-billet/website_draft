import React from "react";
import "./Header.css";
import { Button } from "reactstrap";
import history from "../../history";

function Header(props) {
  return (
    <div>
      <header className="header">
        <a onClick={() => history.push(props.link)}>{props.title}</a>
      </header>
    </div>
  );
}

export default Header;
