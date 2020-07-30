import React from "react";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


//Componentes
import AbsoluteHeader from "./AbsoluteHeader";
import HeaderMain from "./HeaderMain";
import ResponsiveHeader from "./ResponsiveHeader";

const useStyles = makeStyles({
  caja: {
    position: "sticky",
    top: '0',
    zIndex: 9999
  },
  links: {
    color: "red",
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
    <Box className={classes.caja}>
      <AbsoluteHeader />
      <HeaderMain />
    </Box>
    </>
  );
};

export default Header;
