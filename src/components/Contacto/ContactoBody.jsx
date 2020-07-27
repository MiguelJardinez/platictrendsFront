import React from "react";
import { Box, Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Componentes 
import Formulario from './Formulario';

const useStyles = makeStyles({
  hero: {
    backgroundImage:
      "url(https://desarrollo.prognosis.mx/plastictrends/img/contacto/back-contacto.jpg)",
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center, left",
    marginBottom: "5em",
  },
  titulo: {
    fontSize: "2.3em",
    fontWeight: "bold",
    color: '#005FA8',
    marginBottom: "0.5em",
  },
  texto: {
    fontSize: "1.3em",
    lineHeight: "1.1em",
    color: '#4D4D4C',
    fontWeight: '400'
  }
});

const ContactoBody = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.hero}>
        <Container>
          <Box p={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography className={classes.titulo} variant="body1">
                  Contáctanos
                </Typography>
                <Typography className={classes.texto}>
                  ¡Contáctanos! Digita tus datos <br />
                  para ponernos en contacto <br />
                  contigo!
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Formulario />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactoBody;
