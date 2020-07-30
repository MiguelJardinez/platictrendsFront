import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tarjeta: {
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    margin: '0 0.5em'
  },
  tituloTarjeta: {
    fontSize: "16px",
    color: "#005FA8",
    margin: "0.5em 0",
  },
  textoTarjeta: {
    fontSize: "13px",
    textAlign: "justify",
    fontWeight: "200",
    color: '#58585a'
  },
  imagenTarjeta: {
    width: '75%'
  }
});

const TarjetaCertificacion = ({ imagen, titulo, descripcion }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.tarjeta} px={5} py={4} boxShadow={2}>
        <img
          src={imagen}
          alt=""
          className={classes.imagenTarjeta}
        />
        <Box>
          <Typography className={classes.tituloTarjeta} variant="h6">
            {titulo}
          </Typography>
          <Typography className={classes.textoTarjeta} variant="body1">
            {descripcion}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TarjetaCertificacion;
