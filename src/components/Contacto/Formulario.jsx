import React, { useState } from "react";
import { FormControl, Select, MenuItem, Button, TextField } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formulario: {
    width: '100%'
  },
  inputs: {
    marginBottom: "0.8em",
    width: "100%",
  },
  boton:{
    background: '#005FA8',
    color: 'white',
    '&:hover': {
      background: '#005FA8',
      color: 'white',
    }
  }
})

const Formulario = () => {

  const classes = useStyles(); 

  return (
    <>
      <FormControl className={classes.formulario}>
        <TextField
          id="outlined-basic"
          name='nombre'
          label="Nombre"
          variant="outlined"
          size="small"
          className={classes.inputs}
        />
        <TextField
          id="outlined-basic"
          name='telefono'
          label="Teléfono"
          variant="outlined"
          size="small"
          className={classes.inputs}
        />
        <TextField
          id="outlined-basic"
          name='email'
          label="Correo Electrónico"
          variant="outlined"
          size="small"
          className={classes.inputs}
        />
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Age"
            variant="outlined"
            className={classes.inputs}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Quejas o Sugerencias</MenuItem>
            <MenuItem value={20}>Contato Ventas</MenuItem>
            <MenuItem value={30}>Quiero ser Distribuidor</MenuItem>
          </Select>
        <TextField
          id="outlined-multiline-static"
          name='comentaio'
          multiline
          rows={4}
          label="Comentarios"
          variant="outlined"
          className={classes.inputs}
          size="small"
        >
        </TextField>
          <Button className={classes.boton}>Enviar</Button>
      </FormControl>
    </>
  );
};

export default Formulario;
