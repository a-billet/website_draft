import React from "react";
import Header from "./Header";

import "../view/Template.css";

function AboutMe() {
  const title = "About Me";

  return (
    <div>
      <Header title={title} />
      <h1>Welcome to my website</h1>
      <p>This site is mainly to present my photo galery</p>
      <h1>Who am I</h1>
      <h2>My life</h2>
      <p>Write something about my life</p>
      <h2>Photography</h2>
      <p>
        Write something about photography
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </p>
      <h2>Contact</h2>
      <p>billet.amaury@gmail.com</p>
    </div>
  );
}

export default AboutMe;
