import React from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Imagenes
import Nosotros from "../../assets/img/nosotros/nosotros1.jpg";
import NosotrosMision from "../../assets/img/nosotros/nosotros2.jpg";
import NosotrosVision from "../../assets/img/nosotros/nosotros3.jpg";
import NosotrosValores from "../../assets/img/nosotros/nosotros4.jpg";

const useStyles = makeStyles({
  imagen: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.5);",
  },
  titulos: {
    color: "#005FA8",
    fontWeight: "bold",
  },
  textos: {
    fontSize: "1.2em",
    marginTop: "1em",
    color: "#4D4D4C",
    textAlign: "justify",
  },
});

const BodyNosotros = () => {
  const classes = useStyles();

  return (
    <>
      <Box my={8}>
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item md={6}>
              <Typography className={classes.titulos} variant="h4">
                Empresa con historia
              </Typography>
              <Typography className={classes.textos} variant="body1">
                Investigación y trabajo duro nos respaldan. Contamos con nuestro
                propio laboratorio en el que innovamos nuestros procesos y
                fórmulas para ofrecer a la industria Mexicana productos
                conscientes, duraderos y a prueba de gorilas.
                <br />
                <br />
                Desarrollamos una gran variedad de productos con la más alta
                calidad y resistencia del mercado, con los cuales cumplimos
                nuestro objetivo de facilitar la vida de los hogares mexicanos.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <Box>
                <img className={classes.imagen} src={Nosotros} alt="Nosotros" />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <img
                  className={classes.imagen}
                  src={NosotrosMision}
                  alt="Nosotros"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.titulos} variant="h4">
                Empresa con historia
              </Typography>
              <Typography className={classes.textos} variant="body1">
                Investigación y trabajo duro nos respaldan. Contamos con nuestro
                propio laboratorio en el que innovamos nuestros procesos y
                fórmulas para ofrecer a la industria Mexicana productos
                conscientes, duraderos y a prueba de gorilas.
                <br />
                <br />
                Desarrollamos una gran variedad de productos con la más alta
                calidad y resistencia del mercado, con los cuales cumplimos
                nuestro objetivo de facilitar la vida de los hogares mexicanos.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography className={classes.titulos} variant="h4">
                Empresa con historia
              </Typography>
              <Typography className={classes.textos} variant="body1">
                Investigación y trabajo duro nos respaldan. Contamos con nuestro
                propio laboratorio en el que innovamos nuestros procesos y
                fórmulas para ofrecer a la industria Mexicana productos
                conscientes, duraderos y a prueba de gorilas.
                <br />
                <br />
                Desarrollamos una gran variedad de productos con la más alta
                calidad y resistencia del mercado, con los cuales cumplimos
                nuestro objetivo de facilitar la vida de los hogares mexicanos.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img
                  className={classes.imagen}
                  src={NosotrosVision}
                  alt="Nosotros"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <img
                  className={classes.imagen}
                  src={NosotrosValores}
                  alt="Nosotros"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.titulos} variant="h4">
                Empresa con historia
              </Typography>
              <Typography className={classes.textos} variant="body1">
                Investigación y trabajo duro nos respaldan. Contamos con nuestro
                propio laboratorio en el que innovamos nuestros procesos y
                fórmulas para ofrecer a la industria Mexicana productos
                conscientes, duraderos y a prueba de gorilas.
                <br />
                <br />
                Desarrollamos una gran variedad de productos con la más alta
                calidad y resistencia del mercado, con los cuales cumplimos
                nuestro objetivo de facilitar la vida de los hogares mexicanos.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BodyNosotros;
