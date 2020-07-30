import React from 'react';
import { Typography, Container, Box, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'; 

//componentes 
import TarjetaProducto from '../components/Catalogo/TarjetaProtucto'

const useStyles = makeStyles({
  body: {
    backgroundColor: '#F8F7F5'
  }
});

const productos = [
  { 
    id: 1, 
    color1: '#000',
    color2: '#FF0000',
    categoria: 'Organizacion', 
    nombre: 'Caja 27 gal / 102 lts Heavy Duty c/tapa',
    imagen: 'http://www.plastictrends.com.mx/IMG_ARTS/S027TKA0/S027TKA0-HD5.jpg',
    link: '/producto'
  },
  { 
    id: 2, 
    color1: '#000',
    color2: '#FF0000',
    categoria: 'Organizacion', 
    nombre: 'Caja 19 gal / 72 lts Atlanta c/tapa',
    imagen: 'http://www.plastictrends.com.mx/IMG_ARTS/S019TZZ8C/S019TZZ8C-HD0.jpg',
    link: '/producto'
  },
  { 
    id: 3, 
    color1: '#000',
    color2: '#FF0000',
    categoria: 'Organizacion', 
    nombre: 'Caja 27 gal / 102 lts Heavy Duty c/tapa',
    imagen: 'http://www.plastictrends.com.mx/IMG_ARTS/S014TZZ0/S014TZZ0-HD-0.jpg',
    link: '/producto'
  },
]

const Catalogo = () => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.body} py={8}>
        <Container>
          <Box>
            <Grid container>
              { productos.map( producto => (
                <Grid 
                  item 
                  md={4} xs={1  } sm={12}
                  key={producto.id}
                >
                  <TarjetaProducto 
                    color1={producto.color1}
                    color2={producto.color2}
                    categoria={producto.categoria}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                    link={producto.link}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Catalogo
