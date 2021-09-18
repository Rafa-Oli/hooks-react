import React, { Component } from 'react';
import './App.css';
import FormRegister from './components/FormRegister/FormRegister';
import 'fontsource-roboto';
import { validCPF, validPassword } from './models/register';

import { Container, Typography } from '@material-ui/core';
class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>
        Registration form
        </Typography>
        <FormRegister onSubmit={onSubmit} validations={{'cpf': validCPF,'password': validPassword}} />
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}


export default App;
