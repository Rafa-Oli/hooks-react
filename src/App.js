import React, { Component } from 'react';
import './App.css';
import FormRegister from './components/FormRegister/FormRegister';
import 'fontsource-roboto';

import { Container, Typography } from '@material-ui/core';
class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>
        Registration form
        </Typography>
        <FormRegister onSubmit={onSubmit} validCPF={validCPF} />
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

function validCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: 'CPF deve ter 11 digitos.' };
  } else {
    return { valido: true, texto: '' };
  }
}

export default App;
