import React from "react";
import "./style.scss";

export const Services = () => (
  <div className="services" id="services">
    <div className="top">
      <h2>WHAT’S OUR SECRET?</h2>
      <h3>There are three things that make SuperDelux special</h3>
      <h4>
        Egestas euismod pretium proin viverra feugiat. Cursus non, eget
        elementum sem egestas. Cursus non, eget elementum sem egestas.
      </h4>
    </div>
    <div className="bottom">
      <div className="item">
        <div className="left">
          <h3>THE PROCESS</h3>
          <h4>Our magic playbook</h4>
          <p>
            Enjoy an optimized process from project ideation to ongoing
            maintenance that creates reliable outcomes for each and every
            client.
          </p>
        </div>
        <div className="right">
          <img src="https://www.superdelux.dev/static/2575fc1f02d55f24cd390a5eb3ae26be/88670/playbook.png" />
        </div>
      </div>
      <div className="item swap">
        <div className="left">
          <h3>THE PROCESS</h3>
          <h4>Our magic playbook</h4>
          <p>
            Enjoy an optimized process from project ideation to ongoing
            maintenance that creates reliable outcomes for each and every
            client.
          </p>
        </div>
        <div className="right">
          <img src="https://www.superdelux.dev/static/1923e6ecbde5e7be32272b833e1e6b79/ee604/board.png" />
        </div>
      </div>
      <div className="item">
        <div className="left">
          <h3>THE PROCESS</h3>
          <h4>Our magic playbook</h4>
          <p>
            Enjoy an optimized process from project ideation to ongoing
            maintenance that creates reliable outcomes for each and every
            client.
          </p>
        </div>
        <div className="right">
          <img src="https://www.superdelux.dev/static/f7160919bf51861fc60e45896bd784f1/ee604/support.png" />
        </div>
      </div>
    </div>
  </div>
);
