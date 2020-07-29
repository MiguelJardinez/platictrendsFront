import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  links: {
    color: "#005FA8",
  },
  navegacion: {
    display: "flex",
    justifyContent: "space-between",
    padding: '0'
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
    <Box py={1} px={8}>
        <ul className={classes.navegacion}>
          {links.map((link) => (
            <Link to={link.link}>
              <Typography variant="body1" className={classes.links}> {link.nombre} </Typography>
            </Link>
          ))}
        </ul>
    </Box>
  );
};

export default Menu;
