import React from "react";
import { Typography, Container, Grid, Box } from '@material-ui/core'; 

//Imagenes de las Tiendas
import Wallmart from '../../assets/img/tiendas/wallmart.png'

const Tiendas = () => {
  
  const tiendas = [
    {id: 1, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 2, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 3, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 4, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 5, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 6, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 7, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 8, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 9, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
    {id: 10, tienda: 'Wallmart', imagen: 'Imagen de tienda uno'},
  ]

  return (
    <>
      <Container>
        <Box my={2} textAlign="center">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Typography variant="h5">Distribuidores PlasticTrends</Typography>
              <Typography variant="body1">¿Donde Comprar?</Typography>
            </Grid>

            <Grid item xs={12}>     
              {tiendas.map((tienda) => (
                <Box>
                  <img src={Wallmart} alt=""/>
                  <Typography variant="body2"> {tienda.tienda} </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Tiendas;
