import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Container } from "@material-ui/core";
import { Phone, Place, Email } from '@material-ui/icons';

const useStyles = makeStyles( (theme) => ({

  footerColor: {
    backgroundColor: '#005FA8',
  }

}));

const Footer = () => {

  const year = new Date().getFullYear();
  console.log(year)

  const categorias = [ 'Inicio', 'Nosotros', 'Catalogo', 'Contacto', 'Distribucion' ]
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footerColor} mt={2} py={2}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={9} justify='between'>
              <Box display='flex' justifyContent='space-between' px={2}>
                { categorias.map( categoria => (
                    <Typography variant="body2"> <a href='#'> {categoria} </a></Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign='center'>
                <Phone></Phone>
                <Place></Place>
                <Email></Email>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box textAlign="center">
                  <Typography variant="body1"> Desarrollador Miguel Jardinez {year} </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
