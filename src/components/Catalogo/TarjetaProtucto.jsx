import React from 'react'; 
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  cajaProducto: {
    backgroundColor: '#fff',
    padding: '1em',
    textAlign: 'center',
    borderRadius: '10px'
  },
  imagenProductos: {
    width: '65%',
  },
  botonProducto:{
    marginTop: '2em',
    border: '1px solid #000',
    color: '#000',
    transition: 'all 300ms easeIn',

    '&:hover': {
      background: '#005FA8',
      color: '#fff',
      border: '1px solid #005FA8',
    }
  },
});

const TarjetaProtucto = ({ color1, color2, categoria, nombre, imagen, link }) => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.cajaProducto} mx={2} boxShadow={4}>
        <Box>
          <img className={classes.imagenProductos}  src={ imagen } alt=""/>
        </Box>
        <Box>

        </Box>
        <Box>
          <Typography variant='h6'> {categoria} </Typography>
          <Typography variant='body1'> {nombre} </Typography>
          <Link to={link}><Button className={classes.botonProducto}>  Ver más </Button> </Link>
        </Box>
      </Box>
    </>
  )
}

export default TarjetaProtucto
