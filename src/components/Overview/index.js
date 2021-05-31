import React from "react";
import "./style.scss";
import { ghosdaiLogo, stepOne, stepTwo, stepThree } from "../../images";

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
            Select and buy a Launch<b>BOX</b> from the Dapp's catalog.
          </p>
        </div>
        <div className="right">
          <img src={stepOne}  alt="Step One" />
        </div>
      </div>
      <div className="item swap">
        <div className="left">
          <h3>STEP TWO</h3>
          <h4>Configure your LaunchBOX</h4>
          <p>
            Choose the stablecoin you wish to earn from your <b>LaunchBOX</b>.<br/>
          </p>
            <div className="stable-support">
              <img className="ghostdai" alt="$GHOSTDAI" src={ghosdaiLogo}/>
              <span className="dai"> </span>
              <span className="usdc"> </span>
              <span className="usdt"> </span>
              <br/><br/><b>Supported Stablecoins</b>
            </div>
        </div>
        <div className="right">
          <img src={stepTwo}  alt="Step Two" />
        </div>
      </div>
      <div className="item">
        <div className="left">
          <h3>STEP THREE</h3>
          <h4>Relax and Earn</h4>
          <p>
            Our automated protocol handles the rest of the magic for you. Relax and earn up to 17% APR* in stablecoins, from your launchBOX.
          </p><br/>
          <sm>* Annual Percentage Rate - based on purchased LaunchBOX price</sm><br/><br/>
          <a href="/"><span className="launchapp"></span>Launch App <span style={{ fontSize: 10, marginLeft: 5 }}>coming soon</span></a>
        </div>
        <div className="right">
          <img src={stepThree} alt="Step Three" />
        </div>
      </div>
    </div>
  </div>
);
