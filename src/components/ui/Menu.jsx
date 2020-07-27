import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  links: {
    color: "red",
  },
  navegacion: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Menu = () => {
  const classes = useStyles();

  const links = [
    { nombre: "Inicio", link: "" },
    { nombre: "Nosotros", link: "/nosotros" },
    { nombre: "Catalogo", link: "/catalogo" },
    { nombre: "Contacto", link: "/contacto" },
    { nombre: "Distribucion", link: "/distribucion" },
  ];

  return (
    <ul className={classes.navegacion}>
      {links.map((link) => (
        <Link to={link.link}>
          <Typography variant="body1" className={classes.links}> {link.nombre} </Typography>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
