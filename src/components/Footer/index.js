import React from "react";
import "./style.scss";
import { ghoulLogo, ghostdaiLogo } from "../../images";

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="copyright">
        <p>2021 &copy; Launch<b>BOX</b><br/><br/>
          <a href="https://ghoultoken.io" target="_blank"  rel="noreferrer"><img className="ghoulIcons" alt="GHOUL" src={ghoulLogo}/></a>
          <a href="https://ghoul.finance" target="_blank"  rel="noreferrer"><img className="ghoulIcons" alt="GHOSTDAI" src={ghostdaiLogo}/></a>
        </p>
 
        <a href="#top">Back to Top</a>
      </div>
    </div>
  </footer>
);
