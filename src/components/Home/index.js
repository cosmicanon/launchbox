import React from "react";
import {
  Seo,
  Landing,
  Clients,
  TechStack,
  Motto,
  Services,
  JoinCommunity,
} from "..";

export const Home = () => (
  <>
    <Seo title="Homepage" />
    <div className="container">
      <Landing />
      <Clients />
      <TechStack />
      <Motto />
      <Services />
      <JoinCommunity />
    </div>
  </>
);
