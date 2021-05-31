import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { logo } from "../../images";
import { Font } from "..";

const useStyles = makeStyles((theme) => ({
  logoArea: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
    overflow: "visible",
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 60,
    },
  },
  logoText: {
    marginLeft: -10,
    fontSize: Font.size25,
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size16,
      marginLeft: -10,
    },
  },
}));

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoArea}>
      <Avatar alt="Logo" src={logo} className={classes.logo} />
      <Typography className={classes.logoText}>Launch<b>BOX</b></Typography>
    </div>
  );
};
