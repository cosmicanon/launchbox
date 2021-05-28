import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Font } from "..";
import { Tabs } from "./Tabs";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 26,
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 26,
    },
  },
  title: {
    fontSize: Font.l,
    fontWeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },

  roadMapImg: {
    width: 150,
    display: "block",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Wrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className="road-map-container">
        <Grid container style={{ alignItems: "center" }}>
          <Grid item md={8} sm={12} xs={12}>
            <h2>
              Roadmap
            </h2>
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Tabs />
        </Grid>
      </div>
    </div>
  );
};
