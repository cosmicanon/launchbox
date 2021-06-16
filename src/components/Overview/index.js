import React from "react";
import "./style.scss";
import { ghostdaiLogo, stepOne, stepTwo, stepThree } from "../../images";

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
            <p>Supported Stablecoins:</p><br/>
              <img className="ghostdai" alt="$GHOSTDAI" src={ghostdaiLogo}/>
              <img className="dai" alt="$DAI" src="https://seeklogo.com/images/D/dai-dai-logo-1AFFA0EDE5-seeklogo.com.png"/>
              <img className="usdc" alt="$USDC" src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=010"/>
              <img className="usdt" alt="$USDT" src="https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png"/>
              
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
            Up to 12% APR* in stablecoins. <br/>Our automated protocol handles the rest of the magic for you. 
          </p><br/><br/>
          <sm>* Annual Percentage Rate - based on the price of a purchased LaunchBOX</sm><br/><br/>
          <a href="/"><span className="launchapp"></span>Launch App <span style={{ fontSize: 10, marginLeft: 5 }}>coming soon</span></a>
        </div>
        <div className="right">
          <img src={stepThree} alt="Step Three" />
        </div>
      </div>
    </div>
  </div>
);
