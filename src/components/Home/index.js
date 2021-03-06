import React from "react";
import {
  Seo,
  Landing,
  Overview,
  JoinCommunity,
} from "..";

export const Home = () => (
  <>
    <Seo title="LaunchBOX" description="Launch Your X" />
    <div className="container">
      <Landing />

      <Overview />
      <JoinCommunity />
    </div>
  </>
);
