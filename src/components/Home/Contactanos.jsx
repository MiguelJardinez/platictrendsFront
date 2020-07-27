import React from "react";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import { Phone } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Mapa from "../ui/Mapa";

const useStyles = makeStyles({

  titulos: {
    color: '#005FA8',
    fontWeight: 'bold'
  }

});


const Contactanos = () => {

  const classes = useStyles();

  const mapas = [
    {
      url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7466.835826472499!2d-103.343899!3d20.65257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa85ee8fad6f84872!2sPlastic%20Trends!5e0!3m2!1ses-419!2smx!4v1595564910820!5m2!1ses-419!2smx",
      id: "1",
      nombre: "Corporativo",
      direccion:
        "Privada Matías Romero 1210, Col. Rincón de Agua Azul, C.P. 44467 Guadalajara, Jalisco.",
    },
    {
      url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7466.814458662724!2d-103.343771!3d20.653005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2108c5579e9%3A0x8becbf472f51721c!2sAv.%20Dr.%20Roberto%20Michel%20698%2C%20Ferrocarril%2C%2044440%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1595564741143!5m2!1ses-419!2smx",
      id: "2",
      nombre: "Guadalajara",
      direccion:
        "Dr. R. Michel 698, Col. La Aurora, C.P. 44450 Guadalajara, Jalisco.",
    },
    {
      url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7474.153048790176!2d-103.414935!3d20.503089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f53b0ca271a91%3A0x2edefa138080678f!2sAv.%20Jes%C3%BAs%20Michel%20Gonz%C3%A1lez%20280%2C%20Lomas%20del%20Sur%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1595565052180!5m2!1ses-419!2smx",
      id: "3",
      nombre: "Tlajomulco",
      direccion:
        "Av. Jesús Michel 280, Tlajomulco de Zúñiga, C.P. 45650, Guadalajara, Jal.",
    },
    {
      url:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15042.419617447054!2d-99.226459!3d19.515627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202d6e348d643%3A0xc8cd456e32b77d51!2sCto%20Centro%20Comercial%2027%2C%20Cd.%20Sat%C3%A9lite%2C%2053100%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1595565100669!5m2!1ses-419!2smx",
      id: "4",
      nombre: "Ciudad de mexico",
      direccion:
        "Circuito Centro Comercial 27, Ciudad Satélite, Naucalpan Juárez, C.P. 53100, Estado de México.",
    },
  ];

  return (
    <>
      <Container>
        <Box mt={2}>
          <Box textAlign="center">
            <Typography className={classes.titulos} variant="h3" color="initial">
              Contáctanos
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body1">
              <a>
                {" "}
                <Phone></Phone>{" "}
              </a>
            </Typography>{" "}
            /{" "}
            <Typography variant="body1">
              <a>
                {" "}
                <Phone></Phone>{" "}
              </a>
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {mapas.map((mapa) => (
              <Grid item md={6}>
                <Box p={1}>
                  <Mapa
                    key={mapa.id}
                    nombre={mapa.nombre}
                    url={mapa.url}
                    direccion={mapa.direccion}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contactanos;
