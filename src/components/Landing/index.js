import React from "react";
import "./style.scss";
import { Lottie } from "..";
import { ghoulLogo, ghostdaiLogo } from "../../images";
import floating from "./floating_anim.json";



export const Landing = () => (
  <div id="top" className="landing">
    <div className="left">
      <h2>
        Earn passive income from your online purchases
      </h2>
      <a href="/"><span className="launchapp"></span>Launch App <span style={{ fontSize: 10, marginLeft: 5 }}>coming soon</span></a>
      <a href="https://t.me/poltergeistexchange" target="_blank"  rel="noreferrer" >
        <span className="telegramIcon"></span> Join Telegram
      </a><br/><br/><br/>
      <div>
        <p>
          Accepted Coins:<br/><br/>
          <img className="ghoulIcons" alt="GHOUL" src={ghoulLogo}/>
          <img className="ghoulIcons" alt="GHOSTDAI" src={ghostdaiLogo}/>
          <img className="ghostIcon" alt="GHOST" src="https://www.ghostbyjohnmcafee.com/static/media/joincommunitylogo.3f526663.svg"/>
          <span className="btcIcon"></span>
          <span className="bchIcon"></span>
          <span className="dashIcon"></span>
          <span className="xmrIcon"></span>
          <span className="zecIcon"></span>
        </p>

      </div>      
    </div>
    <div className="right">
      

              <Lottie
                element={floating}
              />
    </div>

  </div>
);
