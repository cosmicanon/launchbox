import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLinks } from "..";

const useStyles = makeStyles((theme) => ({
  hamburger: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  modalContainer: {
    position: "absolute",
    top: 26,
    left: 25,
    width: 325,
    padding: "30px 0 10px",
    color: "#fff",
    backgroundColor: "#212634",
    textAlign: "center",
    boxSizing: "border-box",
    outline: "none",
    borderRadius: 5,
  },
  closebtn: {
    position: "absolute",
    top: 0,
    right: 0,
    fontWeight: "bold",
    fontSize: 18,
    padding: "5px 10px",
    cursor: "pointer",
  },
  menubarLink: {
    display: "block",
    marginBottom: 20,
  },
}));

export const Hamburger = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [props?.location?.pathname]);

  return (
    <div className={classes.hamburger}>
      <IconButton onClick={handleOpen}>
        <MenuIcon style={{ fill: "#fff" }} />
      </IconButton>
      <Modal
        style={{ backgroundColor: "transparent" }}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modalContainer}>
          <Typography className={classes.closebtn} onClick={handleClose}>
            x
          </Typography>
          <div>
            <NavLinks
              className={`${classes.menubarLink} routerlink`}
              onClick={handleClose}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
