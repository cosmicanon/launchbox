import React from "react";
import "./style.scss";

export const Overview = () => (
  <div className="overview" id="overview">
    <div className="top">
      <h3>Getting started in 3 simple steps:</h3>
    </div>
    <div className="bottom">
      <div className="item">
        <div className="left">
          <h3>STEP ONE</h3>
          <h4>Purchase a LaunchBOX</h4>
          <p>
            Select and buy a LaunchBOX from the Dapp's catalog.
          </p>
        </div>
        <div className="right">
          <img src="https://www.superdelux.dev/static/2575fc1f02d55f24cd390a5eb3ae26be/88670/playbook.png" />
        </div>
      </div>
      <div className="item swap">
        <div className="left">
          <h3>STEP TWO</h3>
          <h4>Configure your LaunchBOX</h4>
          <p>
            Choose the stablecoin you wish to earn from your LaunchBOX.<br/>
            Choices include: 
            <img className="ghostdai" alt="$GHOSTDAI" src="https://ghoultoken.io/images/ghostdai.png"/>
            <span className="dai"> </span>
            <span className="usdc"> </span>
            <span className="usdt"> </span>
          </p>
        </div>
        <div className="right">
          <img src="https://www.superdelux.dev/static/1923e6ecbde5e7be32272b833e1e6b79/ee604/board.png" />
        </div>
      </div>
      <div className="item">
        <div className="left">
          <h3>STEP THREE</h3>
          <h4>Relax and Earn</h4>
          <p>
            Our automated protocol handles the rest of the magic for you. Relax and earn up to 17% BQPR* on your privacy coins.
          </p><br/>
          <sm>* Bi-Quaterly Percentage Rate</sm>
        </div>
        <div className="right">
          <img src="https://www.superdelux.dev/static/f7160919bf51861fc60e45896bd784f1/ee604/support.png" />
        </div>
      </div>
    </div>
  </div>
);
