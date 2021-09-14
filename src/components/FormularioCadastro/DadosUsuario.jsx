import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario(){
    return(
        <form>
            <TextField         
            variant="outlined"
              margin="normal"
        fullWidth 
        id='email' label='email' type='email'/>
            <TextField
             variant="outlined"
             margin="normal"
             fullWidth 
             id='password' label='password' type='password'/>
            <Button type='submit' variant="contained" color="primary">Cadastrar</Button>
        </form>

    );

}

export default DadosUsuario