import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

//Imagenes 
import Logo from '../../../assets/img/logo-responsive.png'

const useStyles = makeStyles({

});

const ResponsiveHeader = () => {

  const classes = useStyles();


  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
              <img src={Logo} alt="Logo de plastic trends"/>
            </Grid>
            <Grid item xs={6} md={6}>
              Como estas
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ResponsiveHeader
