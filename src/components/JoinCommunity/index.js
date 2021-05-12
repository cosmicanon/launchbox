import React from "react";
import "./style.scss";
import { facebook, twitter, instagram, telegram } from "../../images";

export const JoinCommunity = () => (
  <section className="joinCommunity" id="join-community">
    <h2>Join Our Community</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
    <ul>
      <li>
        <a href="/">
          <img src={facebook} alt="" /> Facebook
        </a>
      </li>
      <li>
        <a href="/">
          <img src={twitter} alt="" /> Twitter
        </a>
      </li>
      <li>
        <a href="/">
          <img src={instagram} alt="" /> Instagram
        </a>
      </li>
      <li>
        <a href="/">
          <img src={telegram} alt="" /> Telegram
        </a>
      </li>
    </ul>
  </section>
);
