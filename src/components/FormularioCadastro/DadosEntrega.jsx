import { TextField, Button } from '@material-ui/core';
import React from 'react';
import DadosPessoais from './DadosPessoais';

function DadosEntrega() {
  return (
    <form>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='cep'
        label='CEP'
        type='number'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='endereco'
        label='Endereço'
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='numero'
        label='Número'
        type='number'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='estado'
        label='Estado'
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='cidade'
        label='Cidade'
        type='text'
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}
export default DadosEntrega;
