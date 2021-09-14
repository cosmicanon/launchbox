import React from "react";
import "./style.scss";
import { logo } from "../../images";


export const JoinCommunity = () => (
  <section className="joinCommunity" id="join-community">
  <img alt="LaunchBOX Logo" src={logo} className="logo" />
    <h2>Join Our Community</h2>
    <p>Let's BUIDL and grow something awesome together!</p>
    <ul>
      <li>
        <a href="https://t.me/poltergeistlabs">
          <span className="telegramIcon" alt="Poltergeist Labs Telegram"></span> Telegram
        </a>
      </li>
    </ul>
  </section>
);
