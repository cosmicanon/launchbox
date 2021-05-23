import React from "react";
import "./style.scss";
import { Lottie } from "..";
import { floatingIcon } from "../../images";
import floating from "./floating_anim.json";



export const Landing = () => (
  <div id="top" className="landing">
    <div className="left">
      <h2>
        Simplify your experience of earning passive stablecoins.
      </h2>
      <a href="/"><span className="launchapp"></span>Launch Dapp</a>
      <a href="https://t.me/poltergeistexchange">
        <span className="telegramIcon"></span> Join Community
      </a><br/><br/><br/>
      <div>
        <p>
          Accepted Coins:<br/><br/>
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
