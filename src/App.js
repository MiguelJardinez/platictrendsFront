import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components UI
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import AbsoluteHeader from './components/ui/AbsoluteHeader';

// importar las rutas a la aplicación principal
import Link from './routes/Link'

const App = () => {
  return (
    <>
      <Router>
        <AbsoluteHeader />
        <Header />
        <Link />
        <Footer />
      </Router>
    </>
  );
};

export default App;
