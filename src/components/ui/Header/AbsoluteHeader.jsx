import React from 'react'; 
import { Box, Grid, Container, Typography } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles({
  caja: {
    backgroundColor: '#005FA8',
    padding: '0.5em 0',
  },
  texto: {
    color: 'white'
  }
});

const AbsoluteHeader = () => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.caja}>
        <Container>
          <Grid container spacing={1} justify="flex-end">
            <Grid item>
              <Typography  className={classes.texto} variant="caption">Bolsa de trabajo</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default AbsoluteHeader
