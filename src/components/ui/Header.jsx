import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Typography, Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  links:{
    color: 'red'
  }
})

const Header = () => {

  const classes = useStyles();

  return (
    <>
      <Container>
        <ul>
          <li> <Link to='/'><Typography className={classes.links}>Home</Typography></Link> </li>
          <li> <Link to='/nosotros' className={classes.links}><Typography>Nosotros</Typography></Link> </li>
          <li> <Link to='/catalogo' className={classes.links}><Typography>Catalogo</Typography></Link> </li>
          <li> <Link to='/contacto' className={classes.links}><Typography>Contacto</Typography></Link> </li>
          <li> <Link to='/distribucion' className={classes.links}><Typography>Distribucion</Typography></Link> </li>
        </ul>
      </Container>
    </>
  )
}

export default Header
