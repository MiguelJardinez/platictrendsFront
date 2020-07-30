import React from "react";

//Componentes 
import AboutHome from '../components/Home/AboutHome';
import CategoriasHome from '../components/Home/CategoriasHome';
import Contactanos from '../components/Home/Contactanos';
import CarruselHero from '../components/Home/CarruselHero'; 
import CarruselTarjetas from '../components/Home/CarruselTarjetas';

const Home = () => {
  return (
    <>
      <CarruselHero />
      <AboutHome />
      <CategoriasHome />
      <CarruselTarjetas />
      <Contactanos />
    </>
  );
};

export default Home;
