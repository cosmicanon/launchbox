import React from "react";
import "./style.scss";
import { Lottie } from "..";
import floating from "./floating_anim.json";



export const Landing = () => (
  <div id="top" className="landing">
    <div className="left">
      <h2>
        Earn passive income from your online purchases
      </h2>
      <a href="/"><span className="launchapp"></span>Launch App <span style={{ fontSize: 10, marginLeft: 5 }}>coming soon</span></a>
      <a href="https://t.me/poltergeistlabs" target="_blank"  rel="noreferrer" >
        <span className="telegramIcon"></span> Join Telegram
      </a>    
    </div>
    <div className="right">
      

              <Lottie
                element={floating}
              />
    </div>

  </div>
);
