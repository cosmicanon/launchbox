import React from "react";
import "./style.scss";
import { Lottie } from "..";
import { floatingIcon } from "../../images";
import floating from "./floating_anim.json";



export const Landing = () => (
  <div id="top" className="landing">
    <div className="left">
      <h2>Launch your X</h2>
      <p>
        Experimental projects within the Ghoul Ecosystem
      </p>
      <a href="/"><span className="launchapp"></span> LaunchBOX App</a>
      <a href="http://discord.gg/n2qgHcmBNr">
        <span className="discordIcon"></span> Join Community
      </a>
    </div>
    <div className="right">
      <img src="https://www.superdelux.dev/static/2575fc1f02d55f24cd390a5eb3ae26be/88670/playbook.png" />
                    

    </div>
  </div>
);
