import React from "react";
import "./style.scss";
import { Lottie } from "..";
import { floatingIcon, ghosdaiLogo } from "../../images";



export const Landing = () => (
  <div id="top" className="landing">
    <div className="left">
      <h2>
        Earn passive stablecoins from your cryptos
      </h2>
      <a href="/"><span className="launchapp"></span>Launch App <span style={{ fontSize: 10, marginLeft: 5 }}>coming soon</span></a>
      <a href="https://t.me/poltergeistexchange" target="_blank"  rel="noreferrer" >
        <span className="telegramIcon"></span> Join Community
      </a><br/><br/><br/>
      <div>
        <p>
          Accepted Coins:<br/><br/>
          <img className="ghoulIcons" alt="GHOUL" src="https://ghoultoken.io/images/logo2.png"/>
          <img className="ghoulIcons" alt="GHOSTDAI" src={ghosdaiLogo}/>
          <img className="ghostIcon" alt="GHOST" src="https://www.ghostbyjohnmcafee.com/static/media/joincommunitylogo.3f526663.svg"/>
          <span className="btcIcon"></span>
          <span className="bchIcon"></span>
          <span className="dashIcon"></span>
          <span className="xmrIcon"></span>
          <span className="zecIcon"></span>
        </p>
        <p className="chainsupport">
          Supported Network Chains: <br/><br/>
          <span><img src="https://api.iconify.design/cryptocurrency:eth.svg?color=%23497493&height=32" alt="Ethereum" /> Ethereum</span>
          <span><img src="https://api.iconify.design/cryptocurrency:bnb.svg?color=%23f3ba2f&height=32" alt="Binance Smart Chain" /> BSC</span>
          <span><img src="https://api.iconify.design/cryptocurrency:trx.svg?color=white&height=32" alt="Tron" /> Tron</span>
        </p>
      </div>      
    </div>
    <div className="right">
      <img src="https://www.superdelux.dev/static/2575fc1f02d55f24cd390a5eb3ae26be/88670/playbook.png" />
    </div>

  </div>
);
