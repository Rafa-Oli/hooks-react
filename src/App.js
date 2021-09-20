import React, { Component } from 'react';
import './App.css';
import FormRegister from './components/FormRegister/FormRegister';
import 'fontsource-roboto';
import { validCPF, validPassword } from './models/register';
import { Container, Typography } from '@material-ui/core';
import ValidationsRegister from './contexts/validations-register';
class App extends Component {
  render() {
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>
        Registration form
        </Typography>
        <ValidationsRegister.Provider value={{'cpf': validCPF,'password': validPassword, 'name': validPassword}}>
        <FormRegister onSubmit={onSubmit} />
        </ValidationsRegister.Provider>
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log("data",dados);
}


export default App;
