import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

  titulos:{
    color: '#005FA8',
    margin: '0.5em 0',
    fontWeight: '500'
  },
  mapa: {
    width: '95%',
    height: '350px',
    border: 'none',
    borderRadius: '10px',
    marginBottom: '1em',
    boxShadow: "1px 3px 10px rgba(0,0,0,0.2);",
  },
  descripcion:{
    fontWeight: '200',
    color: '#4D4D4C',
    padding: '0.5em 1em'
  }

})

const Mapa = ({ url, nombre, direccion }) => {

  const classes = useStyles();

  return (
    <>
      <Box textAlign='center'>
        <Typography className={classes.titulos} variant="h5"> {nombre} </Typography>
          <iframe className={classes.mapa} src={url} title={nombre}></iframe>
        <Typography className={classes.descripcion} variant="body1"> {direccion} </Typography>
      </Box>
    </>
  );
};

export default Mapa;
