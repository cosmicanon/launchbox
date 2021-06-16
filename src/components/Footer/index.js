import React from "react";
import "./style.scss";
import { ghoulLogo, ghostdaiLogo } from "../../images";

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="copyright">
        <p>2021 &copy; Launch<b>BOX</b><br/>
          <a href="https://ghoultoken.io" target="_blank"  rel="noreferrer"><img className="ghoulIcons" alt="GHOUL" src={ghoulLogo}/></a>
          <a href="https://ghoultoken.io" target="_blank"  rel="noreferrer"><img className="ghoulIcons" alt="GHOSTDAI" src={ghostdaiLogo}/></a>
          <a href="https://www.ghostbyjohnmcafee.com" target="_blank"  rel="noreferrer"><img className="ghostIcon" alt="GHOST" src="https://www.ghostbyjohnmcafee.com/static/media/joincommunitylogo.3f526663.svg"/></a>
        </p>
 
        <a href="#top">Back to Top</a>
      </div>
    </div>
  </footer>
);
