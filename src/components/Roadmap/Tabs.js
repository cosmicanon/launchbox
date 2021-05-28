import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import { roadMapTabsAdaptive, roadMapTabs } from "../../images";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 44,
    paddingBottom: 22,
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${roadMapTabs})`,
      backgroundPosition: "center 122px",
      backgroundRepeat: "no-repeat",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 24,
      backgroundImage: `none`,
    },
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 229,
    paddingLeft: 61,
    "&:first-child": {
      height: 122,
      marginBottom: 22,
    },
    "&:nth-child(even)": {
      paddingLeft: 245,
    },

    [theme.breakpoints.down("sm")]: {
      position: "relative",
      alignItems: "center",
      height: "auto",
      paddingLeft: 0,
      marginBottom: 50,
      "&:first-child": {
        height: "auto",
        marginBottom: 50,
      },
      "&:nth-child(even)": {
        paddingLeft: 0,
      },
      "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        bottom: 0,
        width: 460,
        height: 46,
        backgroundImage: `url(${roadMapTabsAdaptive})`,
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        },
      },
    },
  },
  title: {
    fontSize: 20,
    width: 568,
    color: "#26a6b0",
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      width: 460,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  description: {
    letterSpacing: 0.5,
    fontSize: 14,
    color: theme.palette.secondary.textColor,
    width: 568,
    marginTop: 5,
    lineHeight: "18px",
    [theme.breakpoints.down("sm")]: {
      width: 460,
      marginBottom: 60,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const list = [
  {
    title: "Phase 0 (In Progress)",
    description:
      "Development and stabilisation testing of launchBOX v1 Alpha",
  },
  {
    title: "Phase 1",
    description:
      "launchBOX v1. Buy, configure, start. Everything else is automated for you",
  },
  {
    title: "Phase 2",
    description:
      "Sponsored LaunchBOX",
  },
  {
    title: "Phase 3",
    description:
      "LaunchBOX Dapp Governance",
  },
  {
    title: "Phase 4",
    description:
      "LaunchBOX v2",
  },
];

export const Tabs = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      {list.map((data, index) => (
        <Grid key={index} className={classes.tab}>
          <Typography className={classes.title}>{data.title}</Typography>
          <Typography className={classes.description}>
            {data.description}
          </Typography>
        </Grid>
      ))}
    </div>
  );
};
