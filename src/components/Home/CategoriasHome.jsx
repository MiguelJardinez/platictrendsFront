import React from "react";
import { Grid, Typography, Box, Button, Container } from "@material-ui/core";
import { Link } from 'react-router-dom';

//Componentes del ui
import CardHomeCategoria from '../ui/CardHomeCategoria'

const CategoriasHome = () => {
  
  const categorias = [
    { id: 1, categoria: "Organizacion", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/1.png" },
    { id: 2, categoria: "Contenedores", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/2.png" },
    { id: 3, categoria: "Jardín", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/3.png" },
    { id: 4, categoria: "Lavandaria", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/4.png" },
    { id: 5, categoria: "Infantil", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/5.png" },
    { id: 6, categoria: "Mueble", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/7.png" },
    { id: 7, categoria: "Cocina", imagen: "https://desarrollo.prognosis.mx/plastictrends/img/productos/categorias/8.png" },
  ];

  return (
    <>
      <Container>
        <Box mt={1} p={1}>
          <Box textAlign="center"  mb={2}>
            <Typography variant="h3">Categoría de productos</Typography>
          </Box>
          <Grid container spacing={2} justify="center">
            {categorias.map((categoria) => (
              <Grid item md={3}>
                <Box p={1} textAlign="center">
                  <Link to='/catalogo'> 
                    <CardHomeCategoria 
                      categoria={categoria.categoria}
                      imagen= {categoria.imagen}
                    />
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="primary">
              Ver mas
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CategoriasHome;
