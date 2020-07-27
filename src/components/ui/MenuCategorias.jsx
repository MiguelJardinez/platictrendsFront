import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  caja: {
    backgroundColor: '#005FA8',
    borderRadius: '10px'
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between', link: '/catalogo'
  }
});

const MenuCategorias = () => {

  const classes = useStyles();
  const categorias = [
    { nombre: 'Organización', link: '/catalogo'},
    { nombre: 'Cocina', link: '/catalogo'},
    { nombre: 'Muebles', link: '/catalogo'},
    { nombre: 'contenedores', link: '/catalogo'},
    { nombre: 'Infantil', link: '/catalogo'},
    { nombre: 'Lavandaria', link: '/catalogo'},
  ];

  return (
    <>
      <Box className={classes.caja} py={2}>
        <ul className={classes.menu}>
          { categorias.map( categoria => (
            <Link to={categoria.link}>
              <Typography variant="body1"> {categoria.nombre} </Typography>
            </Link>
          ))}
        </ul>
      </Box>
    </>
  )
}

export default MenuCategorias
