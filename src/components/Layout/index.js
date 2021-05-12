import React from "react";

import "../../css/style.css";
import { Navbar, Footer } from "..";

export const Layout = ({ children, ...rest }) => (
  <>
    <Navbar {...rest} />
    {children}
    <Footer />
  </>
);
