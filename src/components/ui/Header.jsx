import React from "react";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Imagenes
import Logo from "../../assets/img/logo.png";

//Componentes
import AbsoluteHeader from "./AbsoluteHeader";
import Menu from "./Menu";
import MenuCategorias from "./MenuCategorias";

const useStyles = makeStyles({
  links: {
    color: "red",
  },
  logo: {
    width: "30%",
  },
  logocontainer: {
    textAlign: "center"
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AbsoluteHeader />
      <Box py={1} boxShadow={1}>
        <Container>
          <Grid container spacing={1} alignItems="center">
            <Grid item md={3} className={classes.logocontainer}>
              <img src={Logo} className={classes.logo} alt="" />
            </Grid>
            <Grid container item md={9}>
               <Grid item xs={12}>
                  <Box py={1}>
                    <Menu />
                  </Box>
               </Grid>
              <Grid item xs={12}>
                <MenuCategorias />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
