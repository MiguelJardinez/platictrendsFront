import React from "react";
import { Typography, Container, Grid, Box } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contenedor: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  imagen: {
    width: '18%',
    margin: '2em 0'
  }
})

//Imagenes de las Tiendas

const Tiendas = () => {

  const classes = useStyles();
  
  const tiendas = [
    {id: 1, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-walmart.png'},
    {id: 2, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-homedepot.png'},
    {id: 3, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-chedraui.png'},
    {id: 4, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-soriana.png'},
    {id: 5, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-heb.png'},
    {id: 6, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-merco.png'},
    {id: 7, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-alsuper.png'},
    {id: 8, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-ley.png'},
    {id: 9, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-calimax.png'},
    {id: 10, tienda: 'Wallmart', imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/distribucion/logo-arteli.png'},
  ]

  return (
    <>
      <Container>
        <Box py={4} textAlign="center">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Typography variant="h5">Distribuidores PlasticTrends</Typography>
              <Typography variant="body1">¿Donde Comprar?</Typography>
            </Grid>

            <Grid item xs={12}>     
              <Box className={classes.contenedor}>
                  {tiendas.map(({tienda, imagen}) => (
                    <img className={classes.imagen} src={imagen} alt=""/>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Tiendas;
