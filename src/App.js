import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes Vistas
import Home from "./Views/Home";
import Nosotros from "./Views/Nosotros";
import Contacto from "./Views/Contacto";
import Catalogo from "./Views/Catalogo";
import Distribucion from "./Views/Distribucion";
import Error404 from './Views/Error404';

//Components UI
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import AbsoluteHeader from './components/ui/AbsoluteHeader';

const App = () => {
  return (
    <>
      <Router>
      <AbsoluteHeader />
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/catalogo" component={Catalogo} />
          <Route path="/distribucion" component={Distribucion} />
          <Route path="/contacto" component={Contacto} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
