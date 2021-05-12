import React from "react";
import "./style.scss";
import { floatingIcon } from "../../images";

export const Landing = () => (
  <div className="landing">
    <div className="left">
      <h2>Experimental projects within the Ghoul/Ghost Ecosystem.</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <a href="/">Request Quote</a>
    </div>
    <div className="right">
      <img src={floatingIcon} alt="floating icon" />
    </div>
  </div>
);
