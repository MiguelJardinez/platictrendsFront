import React from "react";
import { Typography, Grid, Button, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  contenedor: {
    margin: '3em 0',
  },
  texto: {
    color: "#454444",
    fontWeight: "500",
    lineHeight: '1em',
  },
  botton: {
    background: "#005FAB",
    color: "white",
    padding: "0.5em 2em",
    width: "250px",
    transition: "all 300ms ease",
    marginTop: "2em",
    "&:hover": {
      background: "#005FAB",
      width: "280px",
    },
  },
});

const ContactaExperto = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Box className={classes.contenedor}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Box textAlign="center">
                <Typography className={classes.texto} variant="h6">
                  ¿Quieres saber más de nosotros, colaborar o <br /> vender
                  productos PlasticTrends?
                </Typography>
                <Button className={classes.botton} variant="contained">
                  <Link to="/contacto">Contactar a un experto</Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactaExperto;
