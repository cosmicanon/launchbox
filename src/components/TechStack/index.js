import React from "react";
import "./style.scss";
import { floatingIcon } from "../../images";

export const TechStack = () => (
  <div className="techStack" id="tech-stack">
    <div className="top">
      <div className="left">
        <h2>What would future privacy oriented DAOs look like?</h2>
        <h3>Lorem Ipsum is simply dummy text.</h3>
        <p>
          Project LaunchBox is experimenting with ways to create a near
          perpetual crypto reserve and printing framework for early
          prifi/nonprifi crypto startups requiring seed funding. Ghostdai and
          privacy coins are accepted. Upon success this will also serve as a
          foundation product to start the visible and other hidden items on the
          Ghoul Ecosystem Roadmap.
        </p>
      </div>
      <div className="right">
        <img src={floatingIcon} alt="floating icon" />
      </div>
    </div>
    <div className="bottom">
      <ul>
        <li>
          <img
            src="https://superdelux.dev/static/ba588382597d2705c6504bef74f72cc9/79b5e/fast.png"
            alt=""
          />
          <h4>Target Market</h4>
          <p>
            Risk taking startups, entrepreneurs, degens, privacy enthusiasts,
            visionaries
          </p>
        </li>
        <li>
          <img
            src="https://superdelux.dev/static/bd440e49dcfb038e3854fe8f3cd7907a/66e5b/secure.png"
            alt=""
          />
          <h4>Future Market</h4>
          <p>Anyone wanting to start an online business</p>
        </li>
        <li>
          <img
            src="https://www.superdelux.dev/static/c4c34014edf1c6ba41f004c0fef82d58/66e5b/scalable.png"
            alt=""
          />
          <h4>Risks</h4>
          <p>
            There may be early challenges in stabilising the token energy output
            from the warp cores.
          </p>
        </li>
        <li>
          <img
            src="https://www.superdelux.dev/static/028057ea3f9454dab6561f343e5250a2/66e5b/flexible.png"
            alt=""
          />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </li>
      </ul>
    </div>
  </div>
);
