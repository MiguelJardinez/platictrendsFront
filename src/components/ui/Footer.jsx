import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Container } from "@material-ui/core";
import { Phone, Place, Email } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles( (theme) => ({

  footerColor: {
    backgroundColor: '#005FA8',
  },
  footerTitle: {
    color: '#fff'
  }

}));

const Footer = () => {

  const year = new Date().getFullYear();
  console.log(year)

  const links = [
    {nombre: 'Inicio', link: ''},
    {nombre: 'Nosotros', link: '/nosotros'},
    {nombre: 'Catalogo', link: '/catalogo'},
    {nombre: 'Contacto', link: '/contacto'},
    {nombre: 'Distribucion', link: '/distribucion'},
  ]
  const classes = useStyles();

  return (
    <>
      <Box className={classes.footerColor} mt={2} py={2}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={9} justify='between'>
              <Box display='flex' justifyContent='space-between' px={2}>
                { links.map( link => (
                    <Link to={link.link}><Typography variant="body2"> {link.nombre} </Typography></Link>
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
              <Box textAlign="center" mt={2}>
                  <Typography variant="body1" className={classes.footerTitle}> Desarrollador Prognosis {year} </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
