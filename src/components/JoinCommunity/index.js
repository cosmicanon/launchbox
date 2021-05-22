import React from "react";
import "./style.scss";


export const JoinCommunity = () => (
  <section className="joinCommunity" id="join-community">
    <h2>Join Our Community</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
    <ul>
      <li>
        <a href="https://twitter.com/poltergeistDEX">
          <span className="twitterIcon" alt="Poltergeist Exchange" ></span> Twitter
        </a>
      </li>
      <li>
        <a href="http://discord.gg/n2qgHcmBNr">
          <span className="discordIcon" alt="Poltergeist Labs Discord"></span> Discord
        </a>
      </li>
      <li>
        <a href="https://t.me/poltergeistexchange">
          <span className="telegramIcon" alt="Poltergeist Exchange Telegram"></span> Telegram
        </a>
      </li>
    </ul>
  </section>
);
