import React from 'react'; 
import { Switch, Route } from 'react-router-dom'

//Componentes Vistas
import Home from "../Views/Home";
import Nosotros from "../Views/Nosotros";
import Contacto from "../Views/Contacto";
import Catalogo from "../Views/Catalogo";
import Distribucion from "../Views/Distribucion";
import Error404 from '../Views/Error404';

const Link = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/catalogo" component={Catalogo} />
      <Route path="/distribucion" component={Distribucion} />
      <Route path="/contacto" component={Contacto} />
      <Route component={Error404} />
    </Switch>  
    </>
  )
}

export default Link
