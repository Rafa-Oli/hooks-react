import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { FormRegisterProps } from './form-register-interface';

function DataPersonal({ onSubmit, validCPF }: FormRegisterProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(false);
  const [errors, setErrors] = useState({ cpf: { valid: true, text: '' } });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, surname, cpf, news, promotions });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id='name'
        label='Nome'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
        id='sobrenome'
        label='Sobrenome'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validCPF(cpf);
          setErrors({ cpf: isValid });
        }}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id='CPF'
        label='CPF'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <FormControlLabel
        label='Promotions'
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            name='promotions'
            color='primary'
          />
        }
      />

      <FormControlLabel
        label='News'
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name='news'
            color='primary'
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>
        Next
      </Button>
    </form>
  );
}

export default DataPersonal;
