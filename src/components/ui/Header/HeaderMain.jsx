import React from 'react';
import { Box, Container, Grid } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

//Imagenes
import Logo from "../../../assets/img/logo.png"; 

//Componentes
import Menu from "./Menu";
import MenuCategorias from "./MenuCategorias";

const useStyles = makeStyles({
  headerMain: {
    backgroundColor: '#fff'
  },
  logo: {
    width: "30%",
  },
  logocontainer: {
    textAlign: "center"
  }
})

const HeaderMain = () => {

  const classes = useStyles();

  return (
    <Box py={2} boxShadow={3} className={classes.headerMain}>
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
  )
}

export default HeaderMain
