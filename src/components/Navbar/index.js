import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";

import { Logo } from "./Logo";
import { Hamburger } from "./Hamburger";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    margin: "auto",
    maxWidth: 1110,
    minHeight: 80,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      minHeight: 70,
      padding: "0 20px",
    },
  },
  menubar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    a: {
      marginRight: 10,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menubarLink: {
    marginRight: 20,
  },
}));

export const Navbar = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navContainer}>
        <Link className="routerlink" to="/">
          <Logo />
        </Link>
        <div className={classes.menubar}>
          <NavLinks className={`${classes.menubarLink} routerlink`} />
        </div>
        <Hamburger {...props} />
      </div>
    </>
  );
};

const lists = [
      { label: "Overview", link: "/#overview" },
    { label: "Community", link: "/#join-community" },
  { label: "Roadmap", link: "/roadmap" },
];

export const NavLinks = ({ className = "", onClick = () => 0 }) =>
  lists?.map((item, index) => (
    <Link key={index} className={className} to={item.link} onClick={onClick}>
      {item.label}
    </Link>
  ));
