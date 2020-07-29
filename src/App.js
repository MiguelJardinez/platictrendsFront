import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components UI
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header/Header";

// importar las rutas a la aplicación principal
import Link from './routes/Link'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Link />
        <Footer />
      </Router>
    </>
  );
};

export default App;
