import React from 'react'; 
import Carousel from 'react-multi-carousel'; 
import "react-multi-carousel/lib/styles.css";

import { makeStyles } from '@material-ui//styles'
import { Box } from '@material-ui/core'; 

const useStyles = makeStyles({
  hero: {
    height: '450px',
  },
  imagenHero: {
    width: '100%',
    height: '100%',
    objectFit: 'Cover'
  }
});

const Carrusel = () => {

  const classes = useStyles();

  const imagenesHero = [
    { id: 1, imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/slider/slider-background.jpg'},
    { id: 2, imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/slider/slider-background.jpg'},
    { id: 3, imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/slider/slider-background.jpg'},
    { id: 4, imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/slider/slider-background.jpg'},
    { id: 5, imagen: 'https://desarrollo.prognosis.mx/plastictrends/img/slider/slider-background.jpg'}
  ]

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={500}
        draggable={true}
        showDots={true}
      >
      
      { imagenesHero.map( ({ id, imagen }) => (
        <Box className={classes.hero}>
          <img className={classes.imagenHero} src={imagen} alt=""/>
        </Box>
      ))}

      </Carousel>
    </>
  )
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default Carrusel
