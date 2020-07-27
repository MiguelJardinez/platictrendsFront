import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  contenedor: {
    margin: '1em 0'
  },
  imagen: {
    width: "75%",
    position: "relative",
    transition: "all 450ms ease",
    "&:hover": {
      transform: "translatey(-20px)",
      cursor: "pointer",
    },
  },
  titulos: {
    fontWeight: "500",
    color: "#005FA8",
    fontSize: "1.3em",
  },
});

const CardHomeCategoria = ({ categoria, imagen }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.contenedor}>
        <img className={classes.imagen} src={imagen} alt="" />
        <Typography variant="h6" color="initial" className={classes.titulos}>
          {" "}
          {categoria}{" "}
        </Typography>
      </Box>
    </>
  );
};

export default CardHomeCategoria;
