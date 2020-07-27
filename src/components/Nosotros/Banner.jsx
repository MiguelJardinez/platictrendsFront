import React from 'react'; 
import { Box, Container, Grid, Typography } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  banner:{
    backgroundImage: 'url(https://desarrollo.prognosis.mx/plastictrends/img/nosotros/back-nosotros-2.jpg)',
    height: '75vh',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  filtroAzul:{
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    background:'rgba(0, 95, 168, 0.65)',
  },
  grid: {
    height: '75vh'
  },
  texto:{
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    zIndex: '2'
  },
  textoSpan: {
    fontWeight: '900',
  },
}); 


const Banner = () => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.banner}>
        <Box className={classes.filtroAzul}></Box>
        <Container>
          <Grid container spacing={1} className={classes.grid} alignItems="center">
            <Grid item xs={12}>
              <Typography className={classes.texto} variant="h4">PlasticTrends distribuidor <br/> <span className={classes.textoSpan}>de productos de plástico en México</span></Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Banner
