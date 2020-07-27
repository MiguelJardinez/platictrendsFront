import React from "react";

//Componentes 
import AboutHome from '../components/Home/AboutHome';
import CategoriasHome from '../components/Home/CategoriasHome';
import Contactanos from '../components/Home/Contactanos';

const Home = () => {
  return (
    <>
      <AboutHome />
      <CategoriasHome />
      <Contactanos />
    </>
  );
};

export default Home;
