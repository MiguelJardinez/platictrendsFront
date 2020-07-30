import React from 'react'; 
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel'; 
import "react-multi-carousel/lib/styles.css";

//Componentes 
import TarjetaCertificacion from './TarjetaCertificacion';

const useStyles = makeStyles({
  caja: {
    height: 'auto',
    background: '#005FA8',
    margin: '2.5em 0',
    padding: '2em 0'
  },
  carrusel:{
    cursor: 'grab',
  }
});

const certificaciones = [
  { 
    id:1, 
    imagen:'https://desarrollo.prognosis.mx/plastictrends/img/inicio/logo-plastictrends-ema.png', 
    titulo:'Acreditación como Laboratorio de Ensayos de acuerdo a la Norma 17025', 
    descripcion:'Con un esfuerzo compartido, nuestra empresa hermana Sundance Polimers, S.A. DE C.V. logramos el reconocimiento de la Entidad Mexicana de Acreditación A.C. como Laboratorio de Ensayos de acuerdo a los requisitos establecidos por la Norma NMX-EC-17025-IMNC-2018 (ISO/IEC 17025:2017).',
  },
  { 
    id:2, 
    imagen:'https://desarrollo.prognosis.mx/plastictrends/img/inicio/logo-plastictrends-iso9001.png', 
    titulo:'Garantía de satisfacción Plastic Trends', 
    descripcion:'Contamos con distintas certificaciones que respaldan nuestra calidad y compromiso con nuestros clientes.',
  },
  { 
    id:3, 
    imagen:'https://desarrollo.prognosis.mx/plastictrends/img/inicio/logo-plastictrends-heb.png', 
    titulo:'Socio estratégico del año 2016', 
    descripcion:'Tuvimos la fortuna de ser distinguidos por la cadena HEB como “Socio estratégico 2016” por contribuir consistentemente a la mejora de sus ventas, rentabilidad y nivel de servicios.',
  },
  { 
    id:4, 
    imagen:'https://desarrollo.prognosis.mx/plastictrends/img/inicio/logo-plastictrends-walmart.png', 
    titulo:'Socio comercial del año 2015', 
    descripcion:'Plastic Trends fue reconocido como el Proveedor del Año 2015 de Walmart de México y Centroamérica.',
  },
]

const CaruselTarjetas = () => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.caja}>
        <Container>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            draggable={true}
            transitionDuration={1000}
            showDots={true}
            className={classes.carrusel}
          >
            { certificaciones.map( ({id, imagen, titulo, descripcion}) => (
              <TarjetaCertificacion 
                key={id}
                imagen={imagen}
                titulo={titulo}
                descripcion={descripcion}
              />
            ))}
          </Carousel>
        </Container>
      </Box>
    </>
  )
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default CaruselTarjetas
