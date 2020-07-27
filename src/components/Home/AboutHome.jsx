import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button, Container } from "@material-ui/core";
import Logo from "../../assets/img/logo.png";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "32%",
  },
  boton: {
    borderRadius: '0px',
    background: '#005FA8',
    padding: '0.5em 2em',
    textTransform: 'capitalize',
    color: 'white',

    '&:hover': {
      background: '#005FA8',
    }
  },
  titulo: {
    color: '#005FA8',
    lineHeight: '1.2em',
    marginBottom: '0.5em',
    fontWeight: '300'
  },
  titulosSpan: {
    color: '#005FA8',
    fontWeight: '700',
    fontSize: '1.5em',
  },
  textos: {
    textAlign: 'justify',
    color: '#4D4D4C',
    fontSize: '1em',
    fontWeight: '400'
  }
}));

const AboutHome = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box my={4}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box p={2}>
                <Typography variant="h4" className={classes.titulo}>
                  Acerca de <br/> <span className={classes.titulosSpan}>Plastic Trends</span>
                </Typography>
                <Typography variant="body1" className={classes.textos}>
                  Somos el principal fabricante de plástico en México con una
                  amplia trayectoria en el mercado. Tenemos un extenso catálogo
                  que nos permite ofrecer soluciones integrales que se adaptan a
                  todo tipo de hogares y negocios. 
                  <br/><br/>
                  Facilitamos vidas con productos resistentes, durables y de la 
                  mejor calidad a precios justos.
                </Typography>
                <Box mt={1} textAlign="right">
                  <Button className={classes.boton}>
                    Saber más
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box p={2} textAlign="center">
                <img
                  className={classes.image}
                  src={Logo}
                  alt="Logo de la empresa"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutHome;
